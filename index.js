/**
  * Ian parses JSON
  * @param {String} json some JSON for Ian to parse
  * @return {Object} the JSON, parsed by Ian
  */
class Ian {
  parse(json) {
    return JSON.parse(json);
  }
}

module.exports = Ian;
