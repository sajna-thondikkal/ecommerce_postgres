const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');

const Customer = sequelize.define('customer',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        field:"id",
    },
    name: DataTypes.STRING,
    phone:DataTypes.INTEGER
});

// Customer.sync().then((result) => {
//     console.log("-------customer synchronized succesfully----------");
// }).catch((err) => {
//     console.log("---------customer Not synchronized--------");
// });
// module.exports = Customer;