'use strict';

/***
 * 静态文件服务器
 */

const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');

const fileServer = () => {
  // const root = path.resolve(process.argv[2] || '.'); // 只能获取工作空间目录
  const root = path.resolve(process.argv[2] || __dirname); // 从命令行参数获取root目录，默认是当前代码文件所在目录:
  console.log('static server root dir: ', root);
  console.log('arguments: ', JSON.stringify(process.argv));

  const server = http.createServer(function (request, response) {
    console.log('request uri: ', request.url);
    const urls = url.parse(request.url);
    const filePath = path.join(root, urls.pathname);

    fs.stat(filePath, function (error, stat) {
      if (!error && stat.isFile()) {
        console.log('200 file path: ', filePath);
        response.writeHead(200);
        fs.createReadStream(filePath).pipe(response);
      } else {
        console.log('404 error file path: ', filePath);
        response.writeHead(404);
        response.end('<h1>Not Found</h1>');
      }
    });
  });

  server.listen(8080);

  console.log('Server is running at http://127.0.0.1:8080/');
};

module.exports = fileServer;
