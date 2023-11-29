const path = require('path');

console.log('==절대경로');
console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename));
console.log('실제파일명: %s', path.basename(__filename)); //경로 안에서 마지막경로에 대한 정보 반환
console.log('확장자: ', path.extname(__filename));

let pathList = process.env.PATH.split(path.delimiter); //등록할 때 구분자>경로랑 상관없음
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep)); //실제경로:sep가 가지고있음