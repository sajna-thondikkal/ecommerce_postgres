const sequelize = require('../config/dbconfig');
const { DataTypes,Sequelize} = require('sequelize');

const Order = sequelize.define('order',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        field: "id"
    },
    date: DataTypes.DATE,
    product_name: DataTypes.STRING,
    unit_price : DataTypes.FLOAT,
    quantity : DataTypes.INTEGER,
    total_price : DataTypes.FLOAT
})
// Order.sync().then((result) => {
//     console.log("-------Order model synchronized------");
// }).catch((err) => {
//     console.log("---------Order model not synchronised-----",err);
// });
module.exports = Order;