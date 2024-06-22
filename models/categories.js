const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');

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

module.exports = Category;