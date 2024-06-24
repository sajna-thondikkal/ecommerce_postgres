const { where } = require('sequelize');
const User = require('../models/users');
const Role = require('../models/roles.js');

// get all users
function getAllUsers(){
    return new Promise((resolve,reject)=>{
        User.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}
// get user by user id
function getUserByUserId(user_id){
    return new Promise((resolve,reject)=>{
        User.findByPk(user_id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get user by user name
function getUserByUserName(user_name){
    return new Promise((resolve,reject)=>{
        User.findOne({where:{user_name:user_name}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get user role by user id
function getUserRoleByUserId(user_id){
    return new Promise((resolve,reject)=>{
        User.findOne({
            where: {
                user_id: user_id,
            },
            include: [{
                model: Role,
                attributes: ['role_name'],
            }],
        }).then((result) => {
            resolve(result.role.dataValues.role_name);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create user
function createUser(user_name,password,phone,role_id){
    return new Promise((resolve,reject)=>{
        console.log("msg fro repo ro",role_id);
        User.create({user_name,password,phone,role_id}).then((result) => {
            console.log("msg fro repo",result);
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete user
function deleteUser(user_id){
    return new Promise((resolve,reject)=>{
        User.destroy({where:{user_id:user_id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// find grand total of each customer
function grandTotalOfCustomer(user_id){
    return new Promise((resolve,reject)=>{
        User.findAll({
            where: { user_id: user_id },
            attributes: [
                'user_id', 'user_name',
                [Sequelize.fn('SUM', Sequelize.col('orders.total_price')), 'grandTotal']
            ],
            include: [{ model: Order, attributes: [] }], 
            group: ['user.user_id', 'user.user_name'], 
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
    createUser,
    getUserByUserName,
    getAllUsers,getUserByUserId,
    getUserRoleByUserId,
    deleteUser,
    grandTotalOfCustomer
}