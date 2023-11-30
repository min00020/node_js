
const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus (num1,num2){
    return num1 - num2;
}

function multi(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

//모듈: 내보내고싶은 거 객체형식으로 정의
//독립된 라이브러리 만드는 방식 > require
module.exports = { 
    defaultNum,
    add,
    minus,
    multi,
    divide  //:divide 생략 
    //key,value 변수명이 key가 되고 변수의 값을 value로 쓸 때는 묶어서 표기
}

// //import로 
// export default{
    
// }