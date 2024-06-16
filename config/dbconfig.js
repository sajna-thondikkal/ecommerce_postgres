const dbConfig = {
    user: 'e_commercedb_postgres',
    password: 'e_commercedb_postgres',
    host: 'localhost',
    port: 5432,
    database: 'e_commercedb_postgres'
}
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password,{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then((result) => {
    console.log("Connected successfully");
    sequelize.sync().then((result) => {
        console.log("--------Model syncd successfully-----------");
    }).catch((err) => {
        console.log("-------------Model not synced----------");
    });
}).catch((err) => {
    console.log("Connection faild");
});
module.exports = sequelize;