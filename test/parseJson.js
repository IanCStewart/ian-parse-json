const Ian = require('../index');
const expect = require('chai').expect;

const ian = new Ian();

describe('JSON parser', () => {
  it('parses JSON', () => {
    expect(ian.parse("{\"name\":\"ian\"}")).to.deep.equal({name: 'ian'});
  });

  it('fails when no valid JSON is given', () => {
    expect(() => { ian.parse('malle henkie'); }).to.throw(SyntaxError);
  });
});
