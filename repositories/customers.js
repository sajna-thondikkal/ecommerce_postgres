const Customer = require('../models/customers');

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
function createCustomer(name,phone,email,city,state){
    return new Promise((resolve,reject)=>{
        Customer.create(name,phone,email,city,state).then((result) => {
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

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
}