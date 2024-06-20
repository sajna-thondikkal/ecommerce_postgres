const sequelize = require('../config/dbconfig');
const { DataTypes,Sequelize} = require('sequelize');

const Product = sequelize.define('product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        field: "id"
    },
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    offerPrice:DataTypes.INTEGER
})
Product.sync().then((result) => {
    console.log("---Product Model synchronised successfully---");
}).catch((err) => {
    console.log("----Product model not synchronized---");
});

module.exports = Product;