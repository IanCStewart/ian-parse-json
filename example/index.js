const parse = require('ian-parse-json');

const parsedJSON = parse.JSON("{\"name\":\"ian\"}");

console.log(parsedJSON); // {name: 'ian'}
