const mysql = require('mysql'); //모듈블러오고
const sql = require('./db/sql.js') //실행할 파일 불러오기
//require('dotenv').config({ path: './db/mysql.env' }); 

//안정적인 사용을 위해 pool 생성
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    connectionLimit: process.env.MYSQL_LIMIT
});


/* pool.query('sql문', '값', (err, results)=>{
}) */

const query = async (alias, values)=>{
    return new Promise ((resolve, reject)=> {
        pool.query (sql[alias], values, (error, results)=>{
            if (error){
                console.log(error);
                reject({error});
            }else{
                resolve(results);
            }
        })
    })
}
//alias 어떤 sql문 부르는지만 해주면 동작, alias:쿼리문 골라내는 것

// const getData = async() => {
//     console.log(await query ('customerList'));
// };

// getData();

module.exports = {
    query
}; 
//서버는 db 그 자체를 건드리는 프로그램이 아님. 기능상 분리해줘야
//기능을 분리시켜서 모듈 만들었다고 생각하면 됨