const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();

app.use('/user', userRouter);
app.use('/public', express.static('images'));
app.use(function(err,req,res,next){
    res.status(500).json({statusCode : res.statusCode, errMessage : err.message});
});

app.get('/error', (req,res,next)=>{
    next(new Error('Process Fail! Check Data!'));
});

const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);

const getData = (target, where)=>{
    //id 있을 경우>특정조회 / 없으면 전체조회
    let data = jsonData[target];
    if(Array.isArray(data)){ //profile:배열아님>코드 오류날수도 isArray가 배열인지아닌지 체크
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

// const getData = async()=>{
//     return await fetch('db.json')
//     .then(res => res.json())
// }
//html파일 안에서는 작동 함
//자동경로 생성 fetch쓰는 거 > 라이브서버에서 경로 생겨서. 이건 라이브서버x > fetch가 정상작동X
//node:파일이 움직임 // 

// let db = getData();

//인스턴스 기반으로 대응되는 메소드 불러옴>경로 등록>요청 들어올 때 콜백함수 기반으로 어떤식으로 대응할지 선언
app.get('/', (req, res)=>{
    res.send('Server Connect');
}); 

app.get('/posts', (req,res)=>{
  let data = getData('posts');
  res.json(data);
});

app.get('/posts/:id',(req, res)=>{
    let data = getData('posts',req.params.id);
    res.json(data);
})
//body외의 filed에서 가져올때 params 이용해서 해당변수값가져오기
//경로 뒤에:id있기때문에 params로 가져올 수 있음 //:id > 단순경로x 값임


app.get('/comments', (req,res)=>{
    let data = getData('comments');
    res.send(data);
})
app.get('/comments/:id', (req,res)=>{
    let data = getData('comments', req.params.id);
    res.send(data);
})

app.get('/profile', (req,res)=>{
    let data = getData('profile');
    res.send(data);
})
//path or method가 다르면 다르게 인식 
//동일한 경로라도 접근하는 방법(get, put, post,delete..) method 통신방식이 다르면 유니크하다고 인식

app.route('/emps')
.get((req,res)=>{
    res.send('사원 전체조회');
})
.post((req,res)=>{
    res.send('사원 등록');
})
.put((req,res)=>{
    res.send('사원 수정');
})
.delete((req,res)=>{
    res.send('사원 삭제');
}) 


app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
}); //서버 정상실행되면 실행되는 콜백함수

