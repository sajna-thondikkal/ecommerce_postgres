const Brands = require('../models/brands');

// get all brands
function getAllBrands(){
    return new Promise((resolve,reject)=>{
        Brands.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get brand by id
function getBrandById(id){
    return new Promise((resolve,reject)=>{
        Brands.findByPk(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create brand
function createBrand(brandName,category_id){
    return new Promise((resolve,reject)=>{
        Brands.create({brandName,category_id}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update brand
function updateBrand(id,brandName,category_id){
    return new Promise((resolve,reject)=>{
        Brands.update({brandName:brandName,category_id:category_id},{where:{id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete brand
function deleteBrand(id){
    return new Promise((resolve,reject)=>{
        Brands.destroy({where:{id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}