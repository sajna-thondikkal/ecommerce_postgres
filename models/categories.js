const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');
const Brand = require('./brands');

const Category = sequelize.define('category',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false, // true by default
        primaryKey: true, // false by default
        autoIncrement: true, // false by default
        unique: true,
        field: "id",
    },
    categoryName: DataTypes.STRING,
});
// category has many brands
// Category.hasMany(Brand,{foreignKey:'category_id'});
// synchronisation
// Category.sync().then((result) => {
//     console.log("Category synchronised successfully");
// }).catch((err) => {
//     console.log("category not synd");
// });
// export
module.exports = Category;