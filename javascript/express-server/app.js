const express = require('express');
const app = express();

const getData = async()=>{
    return await fetch('db.json')
    .then(res => res.json())
}

let db = getData();

app.get('/', (req, res)=>{
        res.send('Server Connect');
}); 
//인스턴스 기반으로 대응되는 메소드 불러옴>경로 등록>요청 들어올 때 콜백함수 기반으로 어떤식으로 대응할지 선언

app.get('/posts', (req,res)=>{
    res.send(db['posts']);
});


app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
}); //서버 정상실행되면 실행되는 콜백함수

