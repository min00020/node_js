const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

//저장소 지정해주기
const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename : function(req, file, cb){
        cb(null, new Date().valueOf()+path.basename(file.originalname));
        //사용자가 작성한 값은 중복위험 높아서 그대로 사용하지 않음!
    }
});

const upload = multer({ storage : storage });

app.post('/profile', upload.single('avatar'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
}) //파일보내줄 때 사용하는 이름 미리 정해야

app.post('/photos', upload.array('photos',12), (req,res)=>{ //12개까지만 받겠다
    for(let file of req.files){
        console.log(file);
    }
})

app.listen(5000, ()=>{
    console.log('Server Start!');
})