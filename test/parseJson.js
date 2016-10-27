const parse = require('../index');
const expect = require('chai').expect;

describe('JSON parser', () => {
  it('parses JSON', () => {
    expect(parse.JSON("{\"name\":\"ian\"}")).to.deep.equal({name: 'ian'});
  });

  it('fails when no valid JSON is given', () => {
    expect(() => { parse.JSON('malle henkie'); }).to.throw(SyntaxError);
  });
});
