const sequelize = require('../config/dbconfig');
const { DataTypes,Sequelize} = require('sequelize');
const Category = require('./categories');
const Brand = require('./brands');

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
    price: DataTypes.FLOAT,
    offerPrice:DataTypes.FLOAT
})
// relation between product and brand
// each product has only one brand
Product.belongsTo(Category,{foreignKey:'category_id'});
Product.belongsTo(Brand,{foreignKey:'brand_id'})


// synchronisation
// sequelize.sync().then((result) => {
//     console.log("Product created successfully");
// }).catch((err) => {
//     console.log("Product not created");
// });

module.exports = Product;