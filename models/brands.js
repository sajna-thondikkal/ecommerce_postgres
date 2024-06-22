const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');

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
    // categoryId: {
    //     type:DataTypes.INTEGER,
    //     references: {
    //         model: 'categories',
    //         key: 'id'
    //     }
    // }
});

module.exports = Brand;