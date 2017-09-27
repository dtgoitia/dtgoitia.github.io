const pastEntry = require ('./utils/pastEntry.js');
const originalDb = require('./pastData.json');

// Convert to Date all string-dates in db
const db = pastEntry.importDb(originalDb);

// Get db range
const dbRange = pastEntry.getDbRange(db);
const earliestDate = dbRange.earliest;
const latestDate   = dbRange.latest;
const indexRange   = dbRange.indexRange;

// Get database bar list sorted and grouped by index
let dbBars = pastEntry.getDbBars(db);