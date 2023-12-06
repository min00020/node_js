const mysql = require('mysql');
const sql = require('./db/sql.js');

const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD,
    database:process.env.MYSQL_DB,
    connectionLimit:process.env.MYSQL_LIMIT
})

//쿼리 비동기방식으로 해야함
const query = async (table, dml, params)=>{
    return new Promise ((resolve, reject)=>{
        console.log('test',table,dml);
        pool.query(sql[table][dml], params, (error,rows)=>{ //sql쿼리,값,처리결과  //여러 테이블 할 경우 alias대신 
            if(error){
                console.log(error);
                reject({error});
            }else{
                resolve(rows);
            }
        })
    })
}

module.exports={
    query
};