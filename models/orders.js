const sequelize = require('../config/dbconfig');
const {DataTypes} = require('sequelize');
const User = require('./users');


const Order = sequelize.define('order',{
    order_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        field: "id"
    },
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    grand_total:DataTypes.INTEGER
})
const OrderLineItems = sequelize.define('orderlineitems',{
    order_line_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        field: "id"
    },
    product_name:DataTypes.STRING,
    unit_price:DataTypes.INTEGER,
    quantity:DataTypes.INTEGER,
    item_price:DataTypes.INTEGER
})

OrderLineItems.belongsTo(Order,{foreignKey:'order_id'});
Order.hasMany(OrderLineItems,{foreignKey:'order_id'});
Order.belongsTo(User,{foreignKey:'user_id'});


module.exports = {Order,OrderLineItems};

