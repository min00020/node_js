//
let names = ["Hong", "Kang","Adward","Lee",]
names.sort();
console.log(names); //실행하면 오름차순으로 나옴
names.reverse()
console.log(names);

//숫자정렬
let nums = [40,100,1,4,26,10];
nums.sort();
console.log(nums); // 1, 10, 100...
nums.sort((a,b)=>{
    return a-b;
}) // 1-10 > 음수 >>그대로 유지. 
console.log(nums); 
