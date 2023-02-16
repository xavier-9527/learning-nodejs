'use strict';

const readTextFile = require('./read-text-file-async');

const readImgFile = require('./read-image-file-async');

const readImgFileSync = require('./read-image-file-sync');

const readTextFileSync = require('./read-text-file-sync');

const useBuffer = require('./use-buffer');

const useStat = require('./use-stat');

const writeFileAsync = require('./write-text-file-async');

const writeFileSync = require('./write-text-file-sync');

writeFileAsync('-End-End-End-End-End-End-End-End');
writeFileAsync('Sync Input~');

writeFileSync('1231223123123---测试测试----输入成功！-----Input Successfully');

useStat();

useBuffer();

readTextFile();

readTextFileSync();

readImgFile();

readImgFileSync();
