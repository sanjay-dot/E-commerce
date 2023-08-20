// const mysql = require('mysql2');
const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('node-js','root','Admin@123',
{dialect:'mysql',
host:'localhost',
});

module.exports = sequelize;
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-js',
//     password:'Admin@123'
// })


// module.exports =pool.promise();