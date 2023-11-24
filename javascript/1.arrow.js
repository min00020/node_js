//함수 선언식: 외부라이브러리에서 사용가능, var과 같은 방식. 선언만 되어있으면 언제 선언했는지와 상관없이 어디서든 사용가능
function hello(name){
    return "Hello, " + name;
}

let arrHello = (name)=>{return "Hello, " + name;}
arrHello = name => "Hello, " + name;


//함수 표현식: 선언한 후에 사용가능
const message = function (msg){
    return "msg: " + msg;
}

let arrMessage = (msg) => {return "msg: " + msg;}
arrMessage = msg => "msg: " + msg;
arrMessage = () => {
                        let today = new Date().getDay();
                        console.log("오늘날짜:", today);
                    }




// function hello(msg){
//     return "msg, Hello: " + msg;
// }

// console.log(hello("world"));

