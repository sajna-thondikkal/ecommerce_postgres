const sequelize = require('../config/dbconfig');
const Category = require('./categories');
const Brand = require('./brands');
const Product = require('./products');
const Customer = require('./customers');
const Order = require('./orders');
const Orderlist = require('./orderlist');

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
Customer.hasMany(Order,{foreignKey:'customer_id'});
// one order belongs to one customer
Order.belongsTo(Customer,{foreignKey:'customer_id'});

// relation between order and ordered list
// one order has many orderlist
Order.hasMany(Orderlist,{foreignKey:'order_id'});
// one orderlist belongs to only one order
Orderlist.belongsTo(Order,{foreignKey:'order_id'});

sequelize.sync().then((result) => {
    console.log("-----model Syncronized successfully-----");
}).catch((err) => {
    console.log("--- Not synchronized-------");
});


module.exports = {
    Category,Brand,Product,Customer,Order,Orderlist
}