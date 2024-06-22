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
    customer_id: DataTypes.STRING,
    date: DataTypes.DATE,
    totalAmount : DataTypes.FLOAT
})
Order.sync().then((result) => {
    console.log("-------Order model synchronized------");
}).catch((err) => {
    console.log("---------Order model not synchronised-----",err);
});
module.exports = Order;