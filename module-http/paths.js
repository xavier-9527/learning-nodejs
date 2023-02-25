'use strict';

const path = require('path');

const paths = () => {
  // 获取当前代码文件所在目录路径:
  console.log('current directory: ', __dirname);
  // 获取当前代码文件路径:
  console.log('current file: ', __filename);
  console.log('current workspace directory from order `process.cwd()`: ', process.cwd());
  // process.argv[1] 代码执行入口文件路径
  console.log('arguments: ', JSON.stringify(process.argv));

  // 解析当前工作目录:
  console.log(
    'current workspace directory from path module: ',
    path.resolve('.')
  );
  // 组合完整的文件路径:当前目录+'pub'+'index.html':
  console.log(
    'combined file path',
    path.join(path.resolve('.'), 'pub', 'index.html')
  );
};

module.exports = paths;
