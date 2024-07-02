const sequelize = require('../config/dbconfig');
const {DataTypes} = require('sequelize');
const Role = require('./roles');

const User = sequelize.define('user',{
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        field:"id",
    },
    user_name:DataTypes.STRING,
    password:DataTypes.STRING,
    place:DataTypes.STRING,
    phone:DataTypes.INTEGER,
});
// User.hasMany(Order,{foreignKey:'user_id'});
User.belongsTo(Role,{foreignKey:'role_id'});

module.exports = User;