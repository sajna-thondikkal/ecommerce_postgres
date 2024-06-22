const Order = require('../models/orders');

// get all orders
function getAllOrder(){
    return new Promise((resolve,reject)=>{
        Order.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get order by id
function getOrderById(id){
    return new Promise((resolve,reject)=>{
        Order.findByPk(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create orders
function createOrder(date,product_name,unit_price,quantity,total_price,customer_id){
    return new Promise((resolve,reject)=>{
        Order.create({date,product_name,unit_price,quantity,total_price,customer_id}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update orders
function updateOrder(id,totalAmount){
    return new Promise((resolve,reject)=>{
        Order.update({totalAmount},{where: {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete order
function deleteOrder(id){
    return new Promise((resolve,reject)=>{
        Order.destroy({where : {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}


module.exports = {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}