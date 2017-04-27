/** Ian parses JSON */
class Ian {
  /**
   * Parse JSON
   * @param {String} json - Some JSON for Ian to parse.
   * @return {Object} The JSON, parsed by Ian.
  */
  parse(json) {
    return JSON.parse(json);
  }
}

module.exports = Ian;
