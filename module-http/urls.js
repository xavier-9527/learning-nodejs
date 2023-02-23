'use strict';

const url = require('url');

const urls = () => {
  // parse url
  console.log(
    JSON.stringify(
      url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash')
    )
  );

  // parse incomplete url
  console.log(
    JSON.stringify(url.parse('/static/js/jquery.js?name=Hello%20world'))
  );

  // construct a url
  console.log(
    url.format({
      protocal: 'http',
      hostname: 'localhost',
      port: 8080,
      pathname: '/static/js',
      query: {
        name: 'Node.js',
        version: 'v 1.0',
      },
    })
  );
};

module.exports = urls;
