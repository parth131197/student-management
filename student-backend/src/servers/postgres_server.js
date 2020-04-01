const { Pool } = require('pg');
const Config = require('config');
const pool = new Pool({
    user: Config.database.postgres.user,
    host: Config.database.postgres.host,//process.env.PGHOST, //Config.database.postgres.host,
    database: Config.database.postgres.database,
    password: Config.database.postgres.password,
    port: Config.database.postgres.port
});
// pool.on('connect',(connect)=>{
//     console.log("DB connected:",connect);
// });
pool.on('error', (err) => {
    console.error('Unexpected error on idle client: ', err);
    process.exit(-1);
});
module.exports = {
  query: (text, params) => pool.query(text, params),
  end: ()=> pool.end(),
  init: ()=> pool.query('CREATE TABLE IF NOT EXISTS students(rollno INT PRIMARY KEY, name VARCHAR(25),age INT, section VARCHAR(10));')
}