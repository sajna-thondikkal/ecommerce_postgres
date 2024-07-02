const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');
const Category = require('./categories');

const Brand = sequelize.define('brand',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        field:"id",
    },
    brandName: DataTypes.STRING,
});
// Brand belongs to one category
// Brand.belongsTo(Category,{foreignKey:'category_id'});

// Brand.sync().then((result) => {
//     console.log("Brand synced succesfully");
// }).catch((err) => {
//     console.log('Brand not synd');
// });
module.exports = Brand;