//import process from 'process'; //import require 둘다 가능, 전역변수라 안해도 상관없음
const process = require('process');
const os = require('os');


//env는 그냥 호출하면 되지만, os는 함수형태로 추출해야
console.log(process.env.JAVA_HOME); 

console.log('CPU 코어 정보: ',os.cpus()); //CPU 코어 정보 호출
console.log('임시 저장경로 ', os.tmpdir()); //임시 저장경로 확인