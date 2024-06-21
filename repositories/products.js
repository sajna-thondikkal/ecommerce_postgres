const Product = require('../models/products');

// get all products
function getAllProducts(){
    return new Promise((resolve,reject)=>{
        Product.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get product by id
function getProductById(id){
    return new Promise((resolve,reject)=>{
        Product.findByPk(id).then((result) => {
            resolve(result);
            console.log("result from repo",result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create product
function createProduct(productName,price,offerPrice){
    return new Promise((resolve,reject)=>{
        Product.create(productName,price,offerPrice).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err);
        });
    })
}

// update product
function updateProduct(id,productName){
    return new Promise((resolve,reject)=>{
        Product.update({productName: productName},{where : {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete product
function deleteProduct(id){
    return new Promise((resolve,reject)=>{
        Product.destroy({
            where: {id:id}
        }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}


module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    
}