const argumentHandling = require ('../utils/argumentHandling.js');
const chai = require('chai');
const expect = chai.expect;

describe("Argument Handling Test", function() {
  it("number primitive",function() {
    expect('number').to.equal(argumentHandling.isType(1));
    expect('number').to.equal(argumentHandling.isType(5.95489));
    expect('number').to.equal(argumentHandling.isType(-2));
  });
  it("Number object",function(){
    expect('Number').to.equal(argumentHandling.isType(new Number()));
    expect('Number').to.equal(argumentHandling.isType(new Number(1)));
    expect('Number').to.equal(argumentHandling.isType(new Number(5.95489)));
    expect('Number').to.equal(argumentHandling.isType(new Number(-2)));
  });
  it("string primitive", function(){
    expect('string').to.equal(argumentHandling.isType('this is a string'));
  });
  it("String object", function(){
    expect('String').to.equal(argumentHandling.isType(new String()));
    expect('String').to.equal(argumentHandling.isType(new String('this is a string')));
  });
  it("boolean", function(){
    expect('boolean').to.equal(argumentHandling.isType(true));
    expect('boolean').to.equal(argumentHandling.isType(false));
  });
  it("null", function(){
    expect('null').to.equal(argumentHandling.isType(null));
  });
  it("undefined", function(){
    expect('undefined').to.equal(argumentHandling.isType(undefined));
  });
  it("Date object", function(){
    expect('Date').to.equal(argumentHandling.isType(new Date()));
    expect('Date').to.equal(argumentHandling.isType(new Date("2014-06-19")));
  });
  it("Object", function(){
    expect('Object').to.equal(argumentHandling.isType({ a:1, b:2 }));
  });
  it("Array", function(){
    expect('Array').to.equal(argumentHandling.isType([ 1, 2 ]));
  });
  // it("Symbol"); // new in ECMAScript 6
});