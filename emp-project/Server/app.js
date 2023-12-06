require('dotenv').config({ path: './db/mysql.env'}); 
//환경변수: 첫번째줄에서 실행해야
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, ()=>{ //서버 실행
    console.log('3000번 서버 시작!\'~\'*, http://localhost:3000');
})

//전체조회
app.get('/emps', async(req,res)=>{
    let list = await mysql.query('emp','list');
    res.send(list);
})

//단건조회 // : 콜론은 변수에 값 담겠다는 거 > 불러오는 변수가 params
app.get('/emps/:no',async(req,res)=>{
    let data = req.params.no;
    let info = (await mysql.query('emp','info', data))[0];
    res.send(info);
})

//사원 등록
const empTable = ['emp_no','first_name','last_name','gender','hire_date'];
const deptEmpTable = ['emp_no','dept_no','from_date','to_date'];
const salariesTable = ['emp_no','salary','from_date','to_date'];

app.post('/emps',async(req,res)=>{ //put 아니고 post로
    let empInfo = req.body.param; //얘 사용하는게 아니라 가공한 데이터 사용!!
    console.log('1번',empInfo);

    let empData = {
        //'emp_no': empInfo.emp_no //고정값이라 수정 힘듦
    };
    for(let column of empTable){ //for of로 내부값 꺼내기 (내부값=필드명)
        let value = empInfo[column]; //대괄호 사용
        if(value == '') continue; //공백 생략
        empData[column] = value; //새로운 변수에 해당컬럼기반으로 value값 집어넣기 
        //(결론은 필요한 것들 골라서 옮기는 작업!!'^')
    }
    console.log('2번', empData);
    let result = await mysql.query('emp','insert',empData);

    
    let deptEmpData = []; // ? 한 개 이상일 땐 배열/ sql문 확인해보면 답이 나옴
    for(let column of deptEmpTable){
        let value = empInfo[column];
        if(value == '') continue;
        deptEmpData.push(value);
    }
    console.log('deptEmpData출력');
    console.log(deptEmpData);
    result = await mysql.query('empDept','insert',deptEmpData);

    let salData= {}; 
    for(let column of salariesTable){  //let column='emp_no'
        let value = empInfo[column]; // let value = empInfo['emp_no']
        if(value == '') continue; 
        salData[column] = value;  //empData['emp_no'] = value; 
    }
    salData.to_date = '9999-01-01'; //SET ? > 이렇게니까
    result = await mysql.query('sal','insert',salData);

    res.send(result);
    //res.end(); //웬만하면 안쓰는게 좋음

    //빈 공간에 emp_no=@, last_name=@ 이런식으로 계속 값 들어가는 거
    //자바스크립트라 가능한 코드. 자바면 불가능! 필드 동적으로 불러올 수 없음. 코드 실행되는 도중에 필드 못넣음
})

//사원 정보 수정
app.put('/emps/:no', async(req,res)=>{
    let data = [req.body.param, req.params.no]
    let result = await mysql.query('emp','update',data)
    res.send(result);
})

//사원정보 삭제
app.delete('/emps/:no', async(req,res)=>{
    let data = [req.body.param.to_date, req.params.no]
    let result = await mysql.query('empDept','update',data)
    res.send(result);
});
    //쿼리문 개별 물음표 봤을 때 컬럼 X object / 컬럼 O 일반 값으로
    //app.delete: 화면상에서 삭제하는 개념이라서 (내부적으론 update)
    //기본적으로 get확장한 개념이라 body없지만 express나 몇가지 프레임워크는 지원