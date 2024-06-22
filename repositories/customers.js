const Customer = require('../models/customers');
const Order = require('../models/orders');
const { Sequelize, Op } = require('sequelize');

// get all customers
function getAllCustomers(){
    return new Promise((resolve,reject)=>{
        Customer.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get customer by id
function getCustomerById(id){
    return new Promise((resolve,reject)=>{
        Customer.findByPk(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create customers
function createCustomer(name,phone){
    return new Promise((resolve,reject)=>{
        Customer.create(name,phone).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update customer
function updateCustomer(id,name){
    return new Promise((resolve,reject)=>{
        Customer.update({name:name},{where : {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete customer
function deleteCustomer(id){
    return new Promise((resolve,reject)=>{
        Customer.destroy({where :{id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// find grand total of each customer
function grandTotalOfCustomer(id){
    return new Promise((resolve,reject)=>{
        Customer.findAll({
            where: { id: id },
            attributes: [
                'id', 'name',
                [Sequelize.fn('SUM', Sequelize.col('orders.total_price')), 'grandTotal']
            ],
            include: [{ model: Order, attributes: [] }], 
            group: ['customer.id', 'customer.name'], 
            raw: true
        }).then((result) => {
            console.log('result from repo cust',result[0].grandTotal);
            resolve(result[0].grandTotal);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    grandTotalOfCustomer
}