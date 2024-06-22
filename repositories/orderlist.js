const Orderlist = require('../models/orderlist');

// get all orderlists
function getAllOrderList(){
    return new Promise((resolve,reject)=>{
        Orderlist.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get orderlist by id
function getOrderListById(id){
    return new Promise((resolve,reject)=>{
        Orderlist.findByPk(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create order list
function createOrderList(product_name,unit_price,quantity){
    return new Promise((resolve,reject)=>{
        Orderlist.create(product_name,unit_price,quantity).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update order list
function updateOrderList(id,product_name,unit_price,quantity){
    return new Promise((resolve,reject)=>{
        Orderlist.update({product_name,unit_price,quantity},{where: {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete order list
function deleteOrderList(id){
    return new Promise((resolve,reject)=>{
        Orderlist.destroy({where : {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllOrderList,
    getOrderListById,
    createOrderList,
    updateOrderList,
    deleteOrderList

}