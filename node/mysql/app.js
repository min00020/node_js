require('dotenv').config({ path: './db/mysql.env' }); //config안에 사용하고자하는 파일 경로
const express = require('express');
const app = express(); //서버역할해줄 인스턴스
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
})); //미들웨어모듈

app.listen(3000,()=>{
    console.log('Server Start!');
}) //콜백함수로 동작해서 위치 상관없음

app.get('/customers', async(req, res)=>{
    let list = await mysql.query('customerList'); //어떤 쿼리문 실행할지
    res.send(list); //list넘어오면 보내주기
});
//mysql> db.js의 module.exports={query}, 즉 const query 받는 것. values 없으니 비우기
app.get('/customers/:id', async(req,res)=>{
    let data = req.params.id;
    let list = await mysql.query('customerInfo', data);
    res.send(list[0]);
    //select절은 값 배열로 받기때문에 제한 걸어줘야함
})

//post, put > body로 접근, //경로에서 오는 거 >params
app.post('/customers', async(req, res)=>{
    let data = req.body.param;
    let result = await mysql.query('customerInsert', data);
    res.send(result);
    
});


app.put('/customers/:id', async(req, res)=>{
    let datas = [ req.body.param, req.params.id ];
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});


app.delete('/customers/:id', async(req, res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerDelete',data);
    res.send(result);
});

