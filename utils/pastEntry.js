/**
 * Return a new entry object with "start" and "end" string members converted to Date.
 * @param {Object} entry Entry type object. Needs to contain at least "start" and "end" members
 * @returns {Object} A new entry object with "start" and "end" string members converted to Date
 */
const convertEntryStringDatestoDates = entry => {
  const newEntry = Object.assign({}, entry);
  newEntry.start = new Date(entry.start);
  if (entry.end === '' || entry.end === 'not yet') {
    newEntry.end = new Date();
  } else {
    newEntry.end = new Date(entry.end+'-01');   // add day to avoid date overflows
  }
  return newEntry;
};

/**
 * Convert all string-dates in db to Date objects
 * @param {Object} rawDb - Raw past entry database
 * @return {Object} - Past database with dates as Data objects
 */
const importDb = rawDb => {
  const db = {};
  db.academia   = rawDb.academia.  map(entry => convertEntryStringDatestoDates(entry));
  db.experience = rawDb.experience.map(entry => convertEntryStringDatestoDates(entry));
  return db;
};

/**
 * Get db range: earliest date, latest date and indexes in between
 * @param {Object} db - Past entry database
 * @returns {Object} - Earliest and latest data within db, and index amount in between those dates
 */
const getDbRange = db => {
  // Gather all entries in a single array
  const allEntries = db.academia.concat(db.experience);

  // Get earliest start date from all entries, and get the 1st of January of that year
  const earliestDate =  allEntries
    .reduce( (preEntry, curEntry) => {
      return ( preEntry.start < curEntry.start ? preEntry : curEntry);
    }).start;

  // Get latest end date from all entries
  const latestDate = allEntries
    .reduce( (previousEntry, currentEntry) => {
      if (previousEntry.end > currentEntry.end) {
        return previousEntry;
      } else {
        return currentEntry;
      }
    }).end;

  // Extend the earliest date to the start of the same year (to match the bars vertically)
  const extendedEarliestDate = new Date(earliestDate.getFullYear(),  0, 1);
  const extendedLatestDate   = new Date(  latestDate.getFullYear(), 11, 1);

  // Get range of index units covered by the database (db)
  const indexRange = getRelativeIndex(extendedEarliestDate, extendedLatestDate) + 1;

  // Extend the latest   date to the end   of the same year (to match the bars vertically)
  return {
    earliest:   extendedEarliestDate,
    latest:     extendedLatestDate,
    indexRange: indexRange
  };
};

/**
 * Return the date expresed in couples of months.
 * Jan 0000 = 0    Mar 0000 = 1    May 2000 = 12002
 * Feb 0000 = 0    Apr 0000 = 1    Dec 2000 = 12005
 * @param {Date} date Date to be translated into index
 * @returns {number} Date expresed index-units (2 months per unit)
 */
const getAbsoluteIndex = date => {
  // Ensure passed object is a Date object
  if (date instanceof Date) {
    let monthPair = Math.floor(date.getMonth() / 2); // Get index months
    return date.getFullYear()*6 + monthPair;
  } else {
    throw 'getAbsoluteIndex: "date" is not a Date instance';
  }
};

/**
 * Return the relative index of the targetDate as per referenceDate, being the index based on couples of months (see getAbsoluteIndex).
 * @param {Date} referenceDate - Reference date, point where the zero index value will be set
 * @param {Date} targetDate -    Target date
 * @returns {number} Relative index of the targetDate as per referenceDate
 */
const getRelativeIndex = (referenceDate, targetDate) => {
  if (referenceDate instanceof Date && targetDate instanceof Date) {
    return getAbsoluteIndex(targetDate) - getAbsoluteIndex(referenceDate);
  } else {
    if (referenceDate instanceof Date === false) { throw new TypeError('referenceDate expected to be a Date instance, but a '); }
    if (targetDate    instanceof Date === false) { throw new TypeError(   'targetDate expected to be a Date instance, '); }
  }
};

/**
 * Get passed entry bar indexes based on entry dates
 * @param {Object} entry - Entry object
 * @param {Date}   referenceDate - Reference date, point where the zero index value will be set
 * @returns {Array} Array with bar data objects, which contain bar length, index and colour
 */
const getEntryBarIndexes = (entry, referenceDate) => {
  if (entry.hasOwnProperty('bars') === true) {
    let entryStartIndex = getRelativeIndex(referenceDate, new Date(entry.start));
    const entryEndIndex   = getRelativeIndex(referenceDate, new Date(entry.end  ));
    const indexDifference = entryEndIndex - entryStartIndex + 1 - entry.bars.length;
    if (indexDifference > 0 ) {
      console.error('Entry  "' + entry.title + '" is missing ' + indexDifference + ' bar(s)');
    } else if (indexDifference < 0) {
      console.error('Entry  "' + entry.title + '" has ' + (-indexDifference) + ' bar(s) in excess');
    } else {
      return entry.bars.map( barLength => {
        try {
          return { bar: barLength, index: entryStartIndex, color: entry.color };
        } finally {
          entryStartIndex++;
        }
      });
    } 
  } else {
    console.error('Entry  "' + entry.title + '" has no "bars" member.');
  }
};

/**
 * Join bar-index entries with the same index and return them in an object
 * @param {number} indexRange - Number of of indexes to check
 * @param {Array} barIndexArray - Array of bar-index object arrays
 * @returns {Object} - Object containing all bar entries (arrays with bar objects) grouped and sorted by index
 */
const joinEntriesWithSameIndex = (indexRange, barIndexArray) => {
  let tmp = {};
  let i = 0;
  while (i < indexRange) {
    // Foreach each index
    let results = barIndexArray.map(entryArray => {
      return entryArray.filter( bar => bar.index === i ); // get entry bars that have the index property = i
    }).filter( result => result.length > 0 )              // get rid of empty empty cases
      .map(resultsPerIndex => {                           // join all the results in one array
        return resultsPerIndex.reduce( (prev, cur) => prev.concat(cur) );
      });
    tmp[i] = results; // add the array to tmp object
    i++;
  }
  return tmp;
};

/**
 * Get database bar list sorted and grouped by index
 * @param {Object} db - Object with academia and experience members containing entry data objects within arrays
 * @return {Object} - Object with bars sorted and grouped by index
 */
const getDbBars = db => {
  const dbRange = getDbRange(db);

  // Get db entry barIndexArray
  let dbBars = {
    academia:   db.academia  .map(entry => getEntryBarIndexes(entry, dbRange.earliest)),
    experience: db.experience.map(entry => getEntryBarIndexes(entry, dbRange.earliest))
  };
  
  // Join entries with the same index
  dbBars = {
    academia:   joinEntriesWithSameIndex(dbRange.indexRange, dbBars.academia),
    experience: joinEntriesWithSameIndex(dbRange.indexRange, dbBars.experience)
  };
  return dbBars;
};

/**
 * Returns the number of years to plot based on earliest and latest date
 * @param {Date} earliestDate - Earliest date to plot
 * @param {Date} latestDate - Latest date to plot
 * @return {number} - Returns an integer with the amount of years between both dates.
 */
const yearRange = (earliestDate, latestDate) => {
  const y1 = earliestDate.getFullYear();
  const y2 = latestDate.getFullYear();
  const diff = y2 - y1 + 1;
  return (diff >= 0 ? diff : 0);
};

/**
 * Get array with the year values to plot
 * @param {number} startYear - First year within the array (latest year)
 * @param {number} numberOfYears - Length of the array
 * @return {Array} - Returns an array with the year values to plot
 */
const getYearsArray = (startYear, numberOfYears) => {
  return (new Array(numberOfYears))
    .fill(startYear)
    .map((x, i, iterable) => iterable[i] = x - i);
};

module.exports = {
  convertEntryStringDatestoDates,
  importDb,
  getAbsoluteIndex,
  getDbRange,
  getEntryBarIndexes,
  getRelativeIndex,
  joinEntriesWithSameIndex,
  getDbBars,
  yearRange,
  getYearsArray
};