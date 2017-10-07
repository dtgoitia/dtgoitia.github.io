const chai = require('chai');
const expect = chai.expect;
const pastEntry = require ('../utils/pastEntry.js');
const db_step0 = {
  academia: [
    {
      title: 'Certified Associate in Project Management',
      subtitle: 'Project Management Institute (PMI) & Learning People',
      description: 'This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.',
      start: 'Nov 2014',
      end: 'Feb 2015',
      img: 'test_image_path_academia1.svg',
      color: '#92905d',
      bars: [ 11, 11 ],
      x: 0,
      y: 0
    },
    {
      title: 'Graduated in Civil Engineering',
      subtitle: 'University of the Basque Country (UPV/EHU)',
      description: 'Single-year course, to adapt my Bachelor\'s degree to new european academic standards.',
      start: 'Sep 2013',
      end: 'Dec 2013',
      img: 'test_image_path_academia2.svg',
      color: '#888888',
      bars: [ 22, 22 ],
      x: 50,
      y: 20
    },
    {
      title: 'Graduated in Civil Engineering',
      subtitle: 'University of the Basque Country (UPV/EHU)',
      description: 'Single-year course, to adapt my Bachelor\'s degree to new european academic standards.',
      start: 'Jul 2013',
      end: 'Oct 2013',
      img: 'test_image_path_academia3.svg',
      color: '#666666',
      bars: [ 33, 33 ],
      x: 50,
      y: 20
    }
  ],
  'experience': [
    {
      title: 'Graduate Civil Engineer',
      subtitle: 'MJA Consulting',
      description: 'TODO',
      start: '2015-07',
      end: '2015-09',
      img: 'test_image_path_experience1.svg',
      color: '#ffffff',
      bars: [44, 44],
      x: 50,
      y: 20
    },
    {
      title: 'Graduate Civil Engsineer',
      subtitle: 'MJA Consultinga',
      description: 'TODO',
      start: '2015-07',
      end: '2015-10',
      img: 'test_image_path_experience2.svg',
      color: '#aaaaaa',
      bars: [55, 55],
      x: 50,
      y: 20
    }
  ]
};

// Convert to Date all string-dates in db
const db_step1 = pastEntry.importDb(db_step0);
const db_step1_expected = {
  academia: [
    {
      title: 'Certified Associate in Project Management',
      subtitle: 'Project Management Institute (PMI) & Learning People',
      description: 'This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.',
      start: new Date('Nov 2014'),
      end: new Date('Feb 2015'),
      img: 'test_image_path_academia1.svg',
      color: '#92905d',
      bars: [ 11, 11 ],
      x: 0,
      y: 0
    },
    {
      title: 'Graduated in Civil Engineering',
      subtitle: 'University of the Basque Country (UPV/EHU)',
      description: 'Single-year course, to adapt my Bachelor\'s degree to new european academic standards.',
      start: new Date('Sep 2013'),
      end: new Date('Dec 2013'),
      img: 'test_image_path_academia2.svg',
      color: '#888888',
      bars: [ 22, 22 ],
      x: 50,
      y: 20
    },
    {
      title: 'Graduated in Civil Engineering',
      subtitle: 'University of the Basque Country (UPV/EHU)',
      description: 'Single-year course, to adapt my Bachelor\'s degree to new european academic standards.',
      start: new Date('Jul 2013'),
      end: new Date('Oct 2013'),
      img: 'test_image_path_academia3.svg',
      color: '#666666',
      bars: [ 33, 33 ],
      x: 50,
      y: 20
    }
  ],
  'experience': [
    {
      title: 'Graduate Civil Engineer',
      subtitle: 'MJA Consulting',
      description: 'TODO',
      start: new Date('2015-07-01'),
      end: new Date('2015-09-01'),
      img: 'test_image_path_experience1.svg',
      color: '#ffffff',
      bars: [44, 44],
      x: 50,
      y: 20
    },
    {
      title: 'Graduate Civil Engsineer',
      subtitle: 'MJA Consultinga',
      description: 'TODO',
      start: new Date('2015-07-01'),
      end: new Date('2015-10-01'),
      img: 'test_image_path_experience2.svg',
      color: '#aaaaaa',
      bars: [55, 55],
      x: 50,
      y: 20
    }
  ]
};

// Get db range
const dbRange      = pastEntry.getDbRange(db_step1);
const earliestDate = dbRange.earliest;
const latestDate   = dbRange.latest;
const indexRange   = dbRange.indexRange;

const earliestDate_expected = new Date('2013-06-30T23:00:00.000Z');
const latestDate_expected   = new Date('2015-10-01T00:00:00.000Z');
const indexRange_expected   = 13;
const dbRange_expected = {
  earliest: earliestDate_expected,
  latest: latestDate_expected,
  indexRange: indexRange_expected
};

const db_step2 = pastEntry.getDbBars(db_step1);
const db_step2_expected = {
  academia: {
    0: [ { bar: 33, index: 0, color: '#666666' } ],
    1: [ { bar: 22, index: 1, color: '#888888' }, { bar: 33, index: 1, color: '#666666' } ],
    2: [ { bar: 22, index: 2, color: '#888888' } ],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [ { bar: 11, index: 8, color: '#92905d' } ],
    9: [ { bar: 11, index: 9, color: '#92905d' } ],
    10: [],
    11: [],
    12: []
  },
  experience: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [ { bar: 44, index: 12, color: '#ffffff' }, { bar: 55, index: 12, color: '#aaaaaa' } ]
  }
};

const expectedEntry = {
  title: 'Entry title',
  subtitle: 'Entry subtitle',
  description: 'Entry description',
  start: new Date ('Nov 2014'),
  end: new Date('Feb 2015'),
  img: 'past_capm.svg',
  color: '#92905d',
  bars: [ 11, 11 ],
  x: 0,
  y: 0
};

describe('Past Entry Tests', function() {
  it('Convert string-dates to Date objects', function(){
    expect(db_step1_expected).to.deep.equal(db_step1);
  });
  it.skip('Get database range (earliest and latest date, and index amount in between)', function (){
    expect(dbRange_expected).to.deep.equal(dbRange);
    expect(earliestDate_expected).to.deep.equal(earliestDate);
    expect(latestDate_expected).to.deep.equal(latestDate);
    expect(indexRange_expected).to.deep.equal(indexRange);
  });
  it('Get range of index units covered by the data', function(){
    const date0 = new Date('2015-01');
    expect(0).to.equal(pastEntry.getRelativeIndex(date0, date0));
    expect(0).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  0, 1)));
    expect(0).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  1, 1)));
    expect(1).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  2, 1)));
    expect(1).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  3, 1)));
    expect(2).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  4, 1)));
    expect(2).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  5, 1)));
    expect(3).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  6, 1)));
    expect(3).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  7, 1)));
    expect(4).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  8, 1)));
    expect(4).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015,  9, 1)));
    expect(5).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015, 10, 1)));
    expect(5).to.equal(pastEntry.getRelativeIndex(date0, new Date(2015, 11, 1)));
    expect(6).to.equal(pastEntry.getRelativeIndex(date0, new Date(2016,  0, 1)));
    expect(6).to.equal(pastEntry.getRelativeIndex(date0, new Date(2016,  1, 1)));
    expect(7).to.equal(pastEntry.getRelativeIndex(date0, new Date(2016,  2, 1)));
    expect(7).to.equal(pastEntry.getRelativeIndex(date0, new Date(2016,  3, 1)));
  });
  it('Get entry bar indexes based on entry start and end dates', function(){
    let rawEntry = expectedEntry;
    let referenceDate = new Date('Jan 2015');
    let result = [
      { bar: 11, index: -1, color: '#92905d' },
      { bar: 11, index: 0, color: '#92905d' }
    ];
    expect(result).to.deep.equal(pastEntry.getEntryBarIndexes(rawEntry, referenceDate));
  });
  it.skip('Get database bar list sorted and grouped by index', function(){
    expect(db_step2_expected).to.deep.equal(db_step2);
  });
  it('Join bar-index entries with the same index and return them in an object', function(){
    let arg1 = 13;
    let arg2 = [
      [ { bar: 11, index: 8 }, { bar: 11, index: 9 } ], // Entry 1
      [ { bar: 22, index: 1 }, { bar: 22, index: 2 } ], // Entry 2
      [ { bar: 33, index: 5 }, { bar: 33, index: 1 } ]  // Entry 3
    ];
    let output = {
      0: [],
      1: [ { bar: 22, index: 1 }, { bar: 33, index: 1 } ],
      2: [ { bar: 22, index: 2 } ],
      3: [],
      4: [],
      5: [{ bar: 33, index: 5 }],
      6: [],
      7: [],
      8: [ { bar: 11, index: 8 } ],
      9: [ { bar: 11, index: 9 } ],
      10: [],
      11: [],
      12: []
    };
    expect(output).to.deep.equal(pastEntry.joinEntriesWithSameIndex(arg1, arg2));
  });
  it('Get number of years between 2 given dates', function(){
    expect(2).to.equal(pastEntry.yearRange(new Date('2015-01-01'), new Date('2016-01-01')));
    expect(3).to.equal(pastEntry.yearRange(new Date('2015-01-01'), new Date('2017-01-01')));
    expect(0).to.equal(pastEntry.yearRange(new Date('2015-01-01'), new Date('2014-01-01')));
    expect(0).to.equal(pastEntry.yearRange(new Date('2015-01-01'), new Date('2010-01-01')));
  });
  it('Get an array with the years to plot', function(){
    expect([2000, 1999, 1998, 1997]).to.deep.equal(pastEntry.getYearsArray(2000,4));
    expect([-1000, -1001]).to.deep.equal(pastEntry.getYearsArray(-1000,2));
  });
});

