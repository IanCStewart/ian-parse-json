const Ian = require('ian-parse-json');

const ian = new Ian();

const parsedJSON = ian.parse("{\"name\":\"ian\"}");

console.log(parsedJSON); // {name: 'ian'}
