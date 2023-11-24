//필터: 리턴타입 boolean, 원본 살아있음
let words = ['spray','limit','elite','exuberant','paresent'];

let result = words.filter(function(word, idx, arry){
    console.log(word, idx, arry);
    return word.length > 6;
    
}); //콜백함수 만들 때 임의로 (a,b,c,d) //console.log(a,b,c,d);이렇게 찍어보기

console.log('조건: ',result,'/원본: ', words);

//Map:
let users = [
    {
        id : 100,
        name: 'Hong'
    },
    {
        id : 200,
        name: 'Kang'
    },
    {
        id : 300,
        name: 'Lee'
    }
]

result = users.map(function(user){
    // user.grade = user.id == 200? 'VIP':'일반';
    // return user; 
    // 이렇게하면 원본 데이터도 변경됨

    return{
        id: user.id,
        name: user.name,
        grade: user.id == 200? 'VIP':'일반'
    }
})

console.log(users, result);
//객체는 참조형변수 복사개념 없음. 동일한 형태의 객체 만들고 값을 복사하는 것
//리턴되는 대상을 따로 모으는 것. 기존의 객체 배열
//map의 특성  

