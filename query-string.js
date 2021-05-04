const queryString = require('query-string');

const parsed = queryString.parse('p1=1&p2=2&=3&p4=4&p4=5', {arrayFormat: 'bracket'});
console.log(parsed);