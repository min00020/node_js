const mysql = require('mysql'); //모듈블러오고
const sql = require('./db/sql.js') //실행할 파일 불러오기

//안정적인 사용을 위해 pool 생성
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'dev',
    password: '1234',
    database: 'dev',
    connectionLimit: 10
})
//오라클은 계정을 기반으로 접근할 수 있는 테이블 정해져있지만, MySQL은 권한만 제대로 주면 모든 테이블 접근가능

/* pool.query('sql문', '값', (err, results)=>{
    
}) */

const query = async (alias, values)=>{
    return new Promise ((resolve, reject)=> {
        return pool.query (sql[alias], values, (error, results)=>{
            if (err){
                console.log(err);
                reject({err})
            }else{
                resolve(results);
            }
        })
    })
}