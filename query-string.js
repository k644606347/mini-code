const queryString = require('query-string');

queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
//=> {foo: ['1', '2', '3']}

queryString.parse('foo=1&foo=2&foo=3', {arrayFormat: 'bracket'});
//=>  { foo: '3' }