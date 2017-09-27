const pastEntry = require ('./utils/pastEntry.js');
const originalDb = require('./pastData.json');

// Convert to Date all string-dates in db
const db = pastEntry.importDb(originalDb);

// Get db range
const dbRange = pastEntry.getDbRange(db);

// Get database bar list sorted and grouped by index
let dbBars = pastEntry.getDbBars(db);