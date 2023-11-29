const url = require('url');
let legercy = url.parse('https://userpass@sub.examplt.com:8080/p/a/t/h?query=string#hash');

console.log(legercy);

let whatwg = new URL('https://userpass@sub.examplt.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
console.log(whatwg.searchParams.get('query'));
//값만 가져오기 편함. 제공되는 기본 메소드가 많아서 좀 더 자유롭게 데이터를 다룰 수 있음