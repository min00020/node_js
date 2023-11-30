let obj = {
    id: 100,
    name: 'Hong',
    birth: '1999-12-25'
}
//객체기반 destructuringE
let { id, name, age } = obj;
console.log(id, name, age); 

module.export={
    Object: {},
    method: function(){}
    //바깥에서 허용되는 값들 여기에 넣기
}

let { method } = module;

let array = ['Hello','Nice','Monday'];
//let[x,y,z] = array;
let[x,y] = array;
console.log(x,y);
//인덱스 순서대로 값 부여