const {Sequelize} = require('sequelize');

const dbConfig = {
    user: 'ecommerce_db_postgres',
    password: 'ecommerce_db_postgres',
    host: 'localhost',
    port: 5432,
    database : 'ecommerce_db_postgres'
}

const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password,{
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log // Enable logging to see SQL queries
});

sequelize.authenticate().then((result) => {
    console.log("-----Connected successfully------");
}).catch((err) => {
    console.log("-----Not connected------");
});

module.exports = sequelize;