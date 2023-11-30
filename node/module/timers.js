const timeout = setTimeout(()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);

    console.log(`${year}년${month}월${day}일`)
},1000);

let count = 0;
const interval = setInterval(()=>{
    console.log('interval %d', count++);
    if(count == 5){
        clearInterval(interval);
    }
},1000);

//setTimeout: 한번실행되고끝 / interval:반복

const immediate = setImmediate(()=>{
    console.log('즉시실행요청'); 
    //setImmediate 안에 들어가는 거 콜백함수 : 원래 진행되는 코드 (마지막코드)보다 진행순서 느림
    //진짜 즉시 실행되는 함수 아님. 콜백함수 중에서 우선순위 높은 거 (이것도 보장은 X)
})
console.log('마지막코드');