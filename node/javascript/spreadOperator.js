let array = [1,2,3];
let string = "Hello";

// [1,2,3,"H","e","1","1","o"];
let newArray = [...array, ...string];
console.log(newArray);

// let result = [];
// for(let value of array){
//     newArray.push(value);
// }
// for(let value of string){
//     newArray.push(value);
// }
//console.log(result);
