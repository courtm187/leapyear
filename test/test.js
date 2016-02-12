var code = require('../main.js');
var expect = require('chai').expect;

describe('leapYear', function(){
  it('should say leap year', function(){
    expect(code.leapYear(2016)).to.equal("It is a leap year");
  });
});
