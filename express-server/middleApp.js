const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//application/www-form-urlencoded
const defaultParser = express.urlencoded({extended : false});
//application/json
const jsonParser = express.json();

app.use(defaultParser); //동일하게 적용

app.post('/info', (req, res)=>{
    res.send('welcome, ' + req.body.name);
});

//라우터별로 등록하는 법
app.post('/message', jsonParser, (req,res)=>{
    res.send('MSG:, ' + req.body.message); //post라 body에서 값 가져옴
});


app.listen(5000, ()=>{
    console.log('Server start!');
})

//세션이 가지는 정보 (134p)
let sessionSetting = session({
    secret : 'secret key',
    resave : false,
    saveUninitialized: true, 
    cookie : {
        httpOnly: true,
        secure: false,
        maxAge: 60000
    }
});

app.use(sessionSetting);

const corsOptions = {
    origin : 'http://192.168.0.38:5500', //페이지쪽 주소
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req,res)=>{
   res.send(req.session);
   //res.send(req.session.user + req.session.pwd );

});

//id는 고유값이라 id 말고 다른 이름을 넣어야함
app.post('/login', (req,res)=>{
    const { id, pwd } = req.body;
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
}) //req에 있는 세션 이용하는 것

app.get('/logout', (req, res)=>{
    req.session.destroy();
    req.redirect('/');
})



