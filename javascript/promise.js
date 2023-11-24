//비동기작업
const promise = new Promise((resolve, reject)=>{
    if(true){ 
        /*처리성공*/
        resolve("결과데이터");
    }else{
        reject(new Error("에러메세지"));
    }
})
//실패와 에러 다름. 

promise
.then((success, fail)=>{
    /*비동기처리결과*/
    /* success (첫번째 매개변수) : 성공 (fulfilled, resolve)
    fail (두번째 매개변수) : 실패 (rejected, reject 함수 호출상태) */

})
.catch(error=>{
    //예외 (비동기처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생
})
.finally(()=>{
    //처리결과와 무관하게 항상 실행되어야하는 코드
})