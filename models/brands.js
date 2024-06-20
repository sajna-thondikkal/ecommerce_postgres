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
    brandName: DataTypes.STRING
});
Brand.sync().then((result) => {
    console.log("-------Brand synchronized succesfully----------");
}).catch((err) => {
    console.log("---------Brand Not synchronized--------");
});

module.exports = Brand;