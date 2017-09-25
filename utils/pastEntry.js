/**
 * Return a new entry object with "start" and "end" string members converted to Date.
 * @param {Object} entry Entry type object. Needs to contain at least "start" and "end" members
 * @returns A new entry object with "start" and "end" string members converted to Date
 */
const convertEntryStringDatestoDates = entry => {
  let newEntry = entry;
  newEntry.start = new Date(entry.start);
  if (entry.end === '' || entry.end === 'not yet') {
    newEntry.end = new Date();
  } else {
    newEntry.end = new Date(entry.end+'-01');   // add day to avoid date overflows
  }
  return newEntry
}

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
    throw 'getAbsoluteIndex: "date" is not a Date instance'
    return NaN
  }
}

/**
 * Return the relative index of the targetDate as per referenceDate, being the index based on couples of months (see getAbsoluteIndex).
 * @param {Date} referenceDate - Reference date, point where the zero index value will be set
 * @param {Date} targetDate -    Target date
 * @returns {number} Relative index of the targetDate as per referenceDate
 */
const getRelativeIndex = (referenceDate, targetDate) => {
  if (referenceDate instanceof Date && targetDate instanceof Date) {
    return getAbsoluteIndex(targetDate) - getAbsoluteIndex(referenceDate)
  } else {
    if (referenceDate instanceof Date === false) { throw new TypeError('referenceDate expected to be a Date instance, but a ') }
    if (targetDate    instanceof Date === false) { throw new TypeError(   'targetDate expected to be a Date instance, ') }
  }
}

/**
 * Return an array
 * @param {Object} entry 
 * @param {Date}   referenceDate Reference date, point where the zero index value will be set
 * @returns {Array} Array with bar data objects, which contain bar length, colour and index
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
          return { bar: barLength, index: entryStartIndex };
        } finally {
          entryStartIndex++;
        }
      })
    } 
  } else {
    console.error('Entry  "' + entry.title + '" has no "bars" member.');
  }
}

/**
 * Join bar-index entries with the same index and return them in an object
 * @param {number} indexRange - Number of of indexes to check
 * @param {array} barIndexArray - Array of bar-index object array
 */
const joinEntriesWithSameIndex = (indexRange, barIndexArray) => {
  let tmp = {};
  let i = 0;
  while (i < indexRange) {
    // Foreach each index
    let results = barIndexArray.map(entryArray => {
      return entryArray.filter( bar => bar.index === i ); // get entry bars that have the index property = i
    }).filter( result => result.length > 0 )              // get rid of empty empty cases
    .map(resultsPerIndex => {                             // join all the results in one array
      return resultsPerIndex.reduce( (prev, cur) => prev.concat(cur) )
    });
    tmp[i] = results; // add the array to tpp object
    i++;
  }
  return tmp;
};

module.exports = {
  convertEntryStringDatestoDates,
  getAbsoluteIndex,
  getEntryBarIndexes,
  getRelativeIndex,
  joinEntriesWithSameIndex
};