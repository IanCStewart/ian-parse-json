# ian-parse-json

[![npm version](https://badge.fury.io/js/ian-parse-json.svg)](https://badge.fury.io/js/ian-parse-json)

supermooi, groetjes van Sjaak

## Usage

```javascript
const Ian = require('ian-parse-json');

const ian = new Ian();

const parsedJSON = ian.parse("{\"name\":\"ian\"}");

console.log(parsedJSON); // {name: 'ian'}
```
