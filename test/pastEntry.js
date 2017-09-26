const chai = require('chai');
const expect = chai.expect;
const pastEntry = require ('../utils/pastEntry.js');
const db_step0 = {
  "academia": [
    {
      "title": "Certified Associate in Project Management",
      "subtitle": "Project Management Institute (PMI) & Learning People",
      "description": "This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.",
      "start": "Nov 2014",
      "end": "Feb 2015",
      "img": "past_capm.svg",
      "color": "#92905d",
      "bars": [ 11, 11 ],
      "x": 0,
      "y": 0
    },
    {
      "title": "Graduated in Civil Engineering",
      "subtitle": "University of the Basque Country (UPV/EHU)",
      "description": "Single-year course, to adapt my Bachelor's degree to new european academic standards.",
      "start": "Sep 2013",
      "end": "Dec 2013",
      "img": "past_civil.svg",
      "color": "#8789e3",
      "bars": [ 22, 22 ],
      "x": 50,
      "y": 20
    },
    {
      "title": "Graduated in Civil Engineering",
      "subtitle": "University of the Basque Country (UPV/EHU)",
      "description": "Single-year course, to adapt my Bachelor's degree to new european academic standards.",
      "start": "Jul 2013",
      "end": "Oct 2013",
      "img": "past_civil.svg",
      "color": "#8789e3",
      "bars": [ 33, 33 ],
      "x": 50,
      "y": 20
    }
  ],
  "experience": [
    {
      "title": "Graduate Civil Engineer",
      "subtitle": "MJA Consulting",
      "description": "TODO",
      "start": "2015-07",
      "end": "2015-09",
      "bars": [10, 10]
    },
    {
      "title": "Graduate Civil Engsineer",
      "subtitle": "MJA Consultinga",
      "description": "TODO",
      "start": "2015-07",
      "end": "2015-10",
      "bars": [10, 10]
    }
  ]
};

// Convert to Date all string-dates in db
const db_step1 = pastEntry.importDb(db_step0);
const db_step1_expected = {
  "academia": [
    {
      "title": "Certified Associate in Project Management",
      "subtitle": "Project Management Institute (PMI) & Learning People",
      "description": "This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.",
      "start": new Date("Nov 2014"),
      "end": new Date("Feb 2015"),
      "img": "past_capm.svg",
      "color": "#92905d",
      "bars": [ 11, 11 ],
      "x": 0,
      "y": 0
    },
    {
      "title": "Graduated in Civil Engineering",
      "subtitle": "University of the Basque Country (UPV/EHU)",
      "description": "Single-year course, to adapt my Bachelor's degree to new european academic standards.",
      "start": new Date("Sep 2013"),
      "end": new Date("Dec 2013"),
      "img": "past_civil.svg",
      "color": "#8789e3",
      "bars": [ 22, 22 ],
      "x": 50,
      "y": 20
    },
    {
      "title": "Graduated in Civil Engineering",
      "subtitle": "University of the Basque Country (UPV/EHU)",
      "description": "Single-year course, to adapt my Bachelor's degree to new european academic standards.",
      "start": new Date("Jul 2013"),
      "end": new Date("Oct 2013"),
      "img": "past_civil.svg",
      "color": "#8789e3",
      "bars": [ 33, 33 ],
      "x": 50,
      "y": 20
    }
  ],
  "experience": [
    {
      "title": "Graduate Civil Engineer",
      "subtitle": "MJA Consulting",
      "description": "TODO",
      "start": new Date("2015-07-01"),
      "end": new Date("2015-09-01"),
      "bars": [10, 10]
    },
    {
      "title": "Graduate Civil Engsineer",
      "subtitle": "MJA Consultinga",
      "description": "TODO",
      "start": new Date("2015-07-01"),
      "end": new Date("2015-10-01"),
      "bars": [10, 10]
    }
  ]
};

// Get db range
const dbRange      = pastEntry.getDbRange(db_step1);
const earliestDate = dbRange.earliest;
const latestDate   = dbRange.latest;
const indexRange   = dbRange.indexRange;

const earliestDate_expected = new Date("2013-06-30T23:00:00.000Z");
const latestDate_expected   = new Date("2015-10-01T00:00:00.000Z");
const indexRange_expected   = 13;
const dbRange_expected = {
  earliest: earliestDate_expected,
  latest: latestDate_expected,
  indexRange: indexRange_expected
}

// This is what you need to get from the initial data
const lastResult = [
  [ { 'l': 200, 'color': "#fa70ae" }, { 'l': 200, 'color': "#fff" }, { 'l': 80, 'color': "#999" } ],
  [ { 'l': 80, 'color': "#aaa" } ],
  [ { 'l': 60, 'color': "#aaa" } ],
  [ { 'l': 100, 'color': "#aaa" } ]
];

// // --- TESTS
// // Convert to Date all string-dates in db
// let db = {};
// db.academia   = db_step0.academia  .map(entry => pastEntry.convertEntryStringDatestoDates(entry));
// db.experience = db_step0.experience.map(entry => pastEntry.convertEntryStringDatestoDates(entry));



const rawEntry = {
  "title": "Entry title",
  "subtitle": "Entry subtitle",
  "description": "Entry description",
  "start": "Nov 2014",
  "end": "Feb 2015",
  "img": "past_capm.svg"
  ,"color": "#92905d",
  "bars": [ 11, 11 ],
  "x": 0,
  "y": 0
}
const expectedEntry = {
  "title": "Entry title",
  "subtitle": "Entry subtitle",
  "description": "Entry description",
  "start": new Date ("Nov 2014"),
  "end": new Date("Feb 2015"),
  "img": "past_capm.svg",
  "color": "#92905d",
  "bars": [ 11, 11 ],
  "x": 0,
  "y": 0
}
describe("Past Entry Tests", function() {
  it("Convert string-dates to Date objects", function(){
    expect(db_step1_expected).to.deep.equal(db_step0);
  });
  it("Get database range (earliest and latest date, and index amount in between)", function (){
    expect(dbRange_expected).to.deep.equal(dbRange);
    expect(earliestDate_expected).to.deep.equal(earliestDate);
    expect(latestDate_expected).to.deep.equal(latestDate);
    expect(indexRange_expected).to.deep.equal(indexRange);
  });
  it("Get range of index units covered by the data", function(){
    const date0 = new Date("2015-01");
    expect(0).to.equal(pastEntry.getRelativeIndex(date0, date0));
    expect(0).to.equal(pastEntry.getRelativeIndex(date0, new Date("2015-02")));
    expect(1).to.equal(pastEntry.getRelativeIndex(date0, new Date("2015-03")));
    expect(1).to.equal(pastEntry.getRelativeIndex(date0, new Date("2015-04")));
    expect(2).to.equal(pastEntry.getRelativeIndex(date0, new Date("2015-05")));
    expect(2).to.equal(pastEntry.getRelativeIndex(date0, new Date("2015-06")));
  });
  it("Get entry bar indexes based on entry start and end dates", function(){
    let rawEntry = expectedEntry;
    let referenceDate = new Date("Jan 2015");
    let result = [
      { bar: 11, index: -1 },
      { bar: 11, index: 0 }
    ];
    expect(result).to.deep.equal(pastEntry.getEntryBarIndexes(rawEntry, referenceDate));
  });
  it("Join bar-index entries with the same index and return them in an object", function(){
    let arg1 = 13;
    let arg2 = [
      [ { bar: 11, index: 8 }, { bar: 11, index: 9 } ], // Entry 1
      [ { bar: 22, index: 1 }, { bar: 22, index: 2 } ], // Entry 2
      [ { bar: 33, index: 5 }, { bar: 33, index: 1 } ]  // Entry 3
    ];
    let output = {
      '0': [],
      '1': [ { bar: 22, index: 1 }, { bar: 33, index: 1 } ],
      '2': [ { bar: 22, index: 2 } ],
      '3': [],
      '4': [],
      '5': [{ bar: 33, index: 5 }],
      '6': [],
      '7': [],
      '8': [ { bar: 11, index: 8 } ],
      '9': [ { bar: 11, index: 9 } ],
      '10': [],
      '11': [],
      '12': []
    }
    expect(output).to.deep.equal(pastEntry.joinEntriesWithSameIndex(arg1, arg2));
  });
});

