const pastEntry = require ('../utils/pastEntry.js');
const originalDb = require('./../test-pastData.json');
const chai = require('chai');
const expect = chai.expect;

// This is what you need to get from the initial data
const lastResult = [
  [ { 'l': 200, 'color': "#fa70ae" }, { 'l': 200, 'color': "#fff" }, { 'l': 80, 'color': "#999" } ],
  [ { 'l': 80, 'color': "#aaa" } ],
  [ { 'l': 60, 'color': "#aaa" } ],
  [ { 'l': 100, 'color': "#aaa" } ]
];

// --- TESTS
// Convert to Date all string-dates in db
let db = {};
db.academia   = originalDb.academia  .map(entry => pastEntry.convertEntryStringDatestoDates(entry));
db.experience = originalDb.experience.map(entry => pastEntry.convertEntryStringDatestoDates(entry));



const testEntry0 = {"title": "Entry title","subtitle": "Entry subtitle","description": "Entry description","start": "Nov 2014","end": "Feb 2015","img": "past_capm.svg","color": "#92905d","bars": [ 11, 11 ],"x": 0,"y": 0}
const testEntry1 = {"title": "Entry title","subtitle": "Entry subtitle","description": "Entry description","start": new Date ("Nov 2014"),"end": new Date("Feb 2015"),"img": "past_capm.svg","color": "#92905d","bars": [ 11, 11 ],"x": 0,"y": 0}
describe("Past Entry Tests", function() {
  it("Convert string-dates to Date objects", function(){
    expect(testEntry1).to.deep.equal(pastEntry.convertEntryStringDatestoDates(testEntry0));
  });
  it("Get range of index units covered by the data", function(){
    const date0 = new Date("2015-01");
    const date1 = new Date("2015-01");
    const date2 = new Date("2015-02");
    const date3 = new Date("2015-03");
    console.log('date0:', date0);
    console.log('date3:', date3);
    console.log('pastEntry.getRelativeIndex(date3, date0):', pastEntry.getRelativeIndex(date3, date0));
    // const date4 = new Date("2015-04");
    // const date5 = new Date("2015-05");
    // const date6 = new Date("2015-06");
    expect(0).to.equal(pastEntry.getRelativeIndex(date1, date0));
    expect(0).to.equal(pastEntry.getRelativeIndex(date2, date0));
    expect(-1).to.equal(pastEntry.getRelativeIndex(date3, date0));
    // expect(1).to.equal(pastEntry.getRelativeIndex(date4, date0));
    // expect(2).to.equal(pastEntry.getRelativeIndex(date5, date0));
    // expect(2).to.equal(pastEntry.getRelativeIndex(date6, date0));
  });
});

