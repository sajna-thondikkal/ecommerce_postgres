const UserRole = require('../models/roles');

// get all user role
function getAllUserRole(){
    return new Promise((resolve,reject)=>{
        UserRole.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get user role by id
function getUserRoleById(role_id){
    return new Promise((resolve,reject)=>{
        UserRole.findByPk(role_id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create user role
function createUserRole(role_name){
    return new Promise((resolve,reject)=>{
        UserRole.create({role_name}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(result);
        });
    })
}

// update user role
function updateUserRole(role_id,role_name){
    return new Promise((resolve,reject)=>{
        UserRole.update({role_name:role_name},{where: {role_id:role_id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete user role
function deleteUserRole(role_id){
    return new Promise((resolve,reject)=>{
        UserRole.destroy({where:{role_id:role_id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllUserRole,
    getUserRoleById,
    createUserRole,
    updateUserRole,deleteUserRole
}