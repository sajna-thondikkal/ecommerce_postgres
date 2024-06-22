const sequelize = require('../config/dbconfig');
const { DataTypes,Sequelize} = require('sequelize');

const Orderlist = sequelize.define('orderlist',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        field: "id"
    },
    product_name: DataTypes.STRING,
    unit_price : DataTypes.FLOAT,
    quantity : DataTypes.INTEGER
});
// Orderlist.sync().then((result) => {
//     console.log("---Model orderlist synchronised-----");
// }).catch((err) => {
//     console.log("-----Orderlist not syncd----");
// });

module.exports = Orderlist;