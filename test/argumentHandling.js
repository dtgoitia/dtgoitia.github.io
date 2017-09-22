const argumentHandling = require ('../utils/argumentHandling.js');
const chai = require('chai');

describe("Argument Handling Test", function() {
  it("Check numbers",function() {
    chai.expect(argumentHandling.isType(1)).to.equal('number');
    chai.expect(argumentHandling.isType(-1)).to.equal('number');
    chai.expect(argumentHandling.isType(1)).to.equal('number');
  });
});