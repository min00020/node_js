const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('회원정보조회');
});

router.post('/insert', (req, res)=>{
    res.send('회원정보등록');
});

router.put('/update', (req, res)=>{
    res.send('회원 등록');
});

router.delete('/delete', (req,res)=>{
    res.send('회원 삭제');
})


module.exports = router; //누락 안되게 조심!! 모듈로 등록한 정보 반환
