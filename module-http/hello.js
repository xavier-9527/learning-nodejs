'use strict';

const http = require('http');

const hello = () => {
  const server = http.createServer(function (request, response) {
    console.log(`${request.method} : ${request.url}`);
    console.log({ request });

    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end('<h1>Hello World!!!</h1>');
  });

  server.listen(8080);
  console.log('Server is running at http://127.0.0.1:8080/');
};

module.exports = hello;
