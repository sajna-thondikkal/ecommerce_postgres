const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        field:"user_id",
    },
    user_name:DataTypes.STRING,
    phone:DataTypes.INTEGER,
    password:DataTypes.STRING,
});

module.exports = User;