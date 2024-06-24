const sequelize = require('../config/dbconfig');
const Category = require('./categories');
const Brand = require('./brands');
const Product = require('./products');
const Customer = require('./customers');
const Order = require('./orders');
const Role = require('./roles');
const User = require('./users');
// const Orderlist = require('./orderlist');

//  relationship between category and brands
// category has many brands
Category.hasMany(Brand,{foreignKey:'category_id'});
// Brand belongs to one category
Brand.belongsTo(Category,{foreignKey:'category_id'});

// relation between brand and product
// brand has many product
Brand.hasMany(Product,{foreignKey:'brand_id'});
// each product has only one brand
Product.belongsTo(Brand,{foreignKey:'brand_id'});

// relation between customer and order
// one customer has many orders
User.hasMany(Order,{foreignKey:'user_id'});
// one order belongs to one customer
Order.belongsTo(User,{foreignKey:'user_id'});

// relation between user and role
// one role has many users
Role.hasMany(User,{foreignKey:'role_id'});
// one user has one role
User.belongsTo(Role,{foreignKey:'role_id'});

sequelize.sync().then((result) => {
    console.log("-----model Syncronized successfully-----");
}).catch((err) => {
    console.log("---Models Not synchronized-------");
});


module.exports = {
    Category,Brand,Product,Customer,Order,User,Role
}