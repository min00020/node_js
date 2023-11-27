const{ add, minus } = require('./calculator');
//내부 함수 가져올 때
//상대경로 방식 다름. node는 같은 레벨 대상 가져올 때 ./붙임
//경로 표시(./~) vs 모듈 불러오기(cal~)

console.log(add(10,25));
console.log(minus(25,3));
