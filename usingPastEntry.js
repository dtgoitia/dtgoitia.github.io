const pastEntry = require ('./utils/pastEntry.js');
const originalDb = require('./pastData.json');

// Convert to Date all string-dates in db
let db = {};
db.academia   = originalDb.academia  .map(entry => pastEntry.convertEntryStringDatestoDates(entry));
db.experience = originalDb.experience.map(entry => pastEntry.convertEntryStringDatestoDates(entry));

// Gather all entries in a single array
const allEntries = originalDb.academia.concat(originalDb.experience)
.map(entry => pastEntry.convertEntryStringDatestoDates(entry));

// Get earliest start date from all entries
const earliestDate = allEntries.reduce( (previousEntry, currentEntry) => {
  if (previousEntry.start < currentEntry.start) {
    return previousEntry
  } else {
    return currentEntry
  }
}).start;

// Get latest end date from all entries
const latestDate = allEntries.reduce( (previousEntry, currentEntry) => {
  if (previousEntry.end > currentEntry.end) {
    return previousEntry
  } else {
    return currentEntry
  }
}).end;

// Get range of index units covered by the database (db)
const totalAmountOfUnits = pastEntry.getRelativeIndex(earliestDate, latestDate);

console.log('case 1:', pastEntry.getEntryBarIndexes(db.academia[0], earliestDate));
console.log('case 2:', pastEntry.getEntryBarIndexes(db.academia[1], earliestDate));
console.log('case 3:', pastEntry.getEntryBarIndexes(db.academia[3], earliestDate));