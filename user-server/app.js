require('dotenv').config({ path: './db/user.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(4000, ()=>{
    console.log('4000번 서버 시작!!');
})

app.get('/users', async(req, res)=>{
    let list = await mysql.query('userList');
    res.send(list);
})

app.get('/users/:user_no', async(req, res)=>{
    let data = req.params.user_no;
    let list = await mysql.query('userInfo', data);
    res.send(list[0]);
})

app.post('/users', async(req, res)=>{
    let data = req.body.param;
    let result = await mysql.query('userInsert', data);
    res.send(result);
    //console.log(data);
})

app.put('/users/:user_no', async(req, res)=>{
    let datas = [req.body.param, req.params.user_no];
    let result = await mysql.query('userUpdate', datas);
    res.send(result);
})

app.delete('/users/:user_no', async(req, res)=>{
    let data = req.params.user_no;
    let result = await mysql.query('userDelete', data);
    res.send(result);
})