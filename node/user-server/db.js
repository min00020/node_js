const mysql = require('mysql');
const sql = require('./db/sql.js')

const pool = mysql.createPool({
    host:process.env.USER_HOST,
    port:process.env.USER_PORT,
    user:process.env.USER_USER,
    password:process.env.USER_PWD,
    database:process.env.USER_DB,
    connectionLimit:process.env.USER_LIMIT
})

const query = async (alias, values)=>{
    return new Promise ((resolve, reject)=>{
        pool.query(sql[alias], values, (error, results)=>{
            if (error){
                console.log(error);
                reject({error});
            }else{
                resolve(results);
            }
        })
    })
}

module.exports={
    query
};