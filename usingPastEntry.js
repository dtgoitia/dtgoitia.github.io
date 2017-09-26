const pastEntry = require ('./utils/pastEntry.js');
const originalDb = require('./test-pastData.json');

// Convert to Date all string-dates in db
const db = pastEntry.importDb(originalDb);

// Get db range
const dbRange = pastEntry.getDbRange(db);
const earliestDate = dbRange.earliest;
const latestDate   = dbRange.latest;
const indexRange   = dbRange.indexRange;

// Get bar/index object array for a single entry
const testBarIndexArray = pastEntry.getEntryBarIndexes(db.academia[0], earliestDate)

// Get each entry barIndexArray
let academiaBarIndexArray = db.academia.map( entry => pastEntry.getEntryBarIndexes(entry, earliestDate));
let experieceBarIndexArray = db.experience.map( entry => pastEntry.getEntryBarIndexes(entry, earliestDate));

// Join entries with the same index
academiaBarIndexArray  = pastEntry.joinEntriesWithSameIndex(indexRange, academiaBarIndexArray);
experieceBarIndexArray = pastEntry.joinEntriesWithSameIndex(indexRange, experieceBarIndexArray);