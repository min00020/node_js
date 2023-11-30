let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
//` 백틱: 줄바꿈 가능 (''<줄바꿈 안됨)
let msg = `${year}년
${month}월
${day}일`;

console.log(msg);
