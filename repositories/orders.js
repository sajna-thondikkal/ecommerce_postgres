const {Order,OrderLineItems} = require('../models/orders');
// const OrderLineItems = require('../models/orders');

// get all orders
function getAllOrder(){
    return new Promise((resolve,reject)=>{
        Order.findAll({include:[{model:OrderLineItems}]}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}
// get all orederline items
function getAllOrderLineItems(){
    return new Promise((resolve,reject)=>{
        OrderLineItems.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}


// get order by id
function getOrderById(id){
    return new Promise((resolve,reject)=>{
        Order.findByPk(id,{include:[{model:OrderLineItems}]}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}
// get all order line items
function getOrderLineItemById(order_id){
    return new Promise((resolve,reject)=>{
        OrderLineItems.findAll({where:{order_id:order_id},attributes:['product_name','unit_price','quantity','item_price']}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}



// create orders
function createOrder(user_id,date,grand_total){
    return new Promise((resolve,reject)=>{
        Order.create({user_id,date,grand_total}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}
// create orderline items
function createOrderLineItems(ordObj,order_id){
    return new Promise((resolve,reject)=>{
        for(const item of ordObj){
            item.order_id = order_id;
            console.log("msg frm repo ordlnitm",item);
            OrderLineItems.create(item).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
    
        }
    })
}

// update orders
function updateOrder(order_id,user_id,date,grand_total){
    console.log("msg from repo",order_id,user_id,date,grand_total)
    return new Promise((resolve,reject)=>{
        Order.update({user_id,date,grand_total},{where: {order_id:order_id}}).then((result) => {
            console.log("msg from ordr repo",result)
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update orderline item
// function updateOrderLineItem(orderlineitem){
//     for(const item of orderlineitem){
//         return new Promise((resolve,reject)=>{
//                 console.log("msg from repo ordrline: ",item);
//                 OrderLineItems.update({item},{where:{order_id:item.order_id,id:item.id}}).then((result) => {
//                     resolve(result);
//                 }).catch((err) => {
//                     reject(err);
//                 });
//             })
//     }
//     }

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
function deleteOrderLineItem(order_id){
    return new Promise((resolve,reject)=>{
        OrderLineItems.destroy({where:{order_id:order_id}}).then((result) => {
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
    deleteOrder,
    createOrderLineItems,
    getOrderLineItemById,
    getAllOrderLineItems,
    deleteOrderLineItem
}