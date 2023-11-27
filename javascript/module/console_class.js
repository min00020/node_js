const fs = require('fs');
const { Console } = require('console'); //콘솔 클래스

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout : output, stderr : errorOutput });

const count = 5; 
logger.log('count : %d', 5);
logger.error('count :' + count);
//클래스 형태로 콘솔 사용할 때는 파일에 작업가능 //파일에 콘솔 로그 남기기 위해서 사용
