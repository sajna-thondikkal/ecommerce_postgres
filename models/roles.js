const sequelize = require('../config/dbconfig');
const {Sequelize,DataTypes} = require('sequelize');

const Role = sequelize.define('role',{
    role_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        field:"role_id",
    },
    role_name: DataTypes.STRING
})

module.exports = Role;