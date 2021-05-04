const qs = require('qs');

const { log } = console;

log("qs.parse('foo=1&foo=2&foo=3') =>", qs.parse('foo=1&foo=2&foo=3'))