function printMsg(msg='메세지를 입력해주세요', to=''){
    console.log(msg);
}

printMsg('Have a Nice Day');
printMsg(); //(''), (null) 이거 안됨


function sum(x,y,...args){
    let result = x + y;
    console.log(args.length);
    for(let num of args){
        result += num;
    }
    return result;
}
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

//나머지연산자: for of 형태 많이 씀. 배열을 순환
//오버로딩없어서 비슷한 효과내기위해서...
