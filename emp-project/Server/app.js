const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, ()=>{ //서버 실행
    console.log('3000번 서버 시작!, http://localhost:3000');
})

app.get('/',(req,res)=>{
})
