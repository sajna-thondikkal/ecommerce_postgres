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
        }).catch((err) => {
            reject(err);
        });
    })
}

// create product
function createProduct(productName,price,offerPrice,category_id,brand_id){
    return new Promise((resolve,reject)=>{
        Product.create({productName,price,offerPrice,category_id,brand_id}).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err);
        });
    })
}

// update product
function updateProduct(id,productName,price,offerPrice,category_id,brand_id){
    return new Promise((resolve,reject)=>{
        Product.update({productName: productName,price:price,offerPrice:offerPrice,category_id:category_id,brand_id:brand_id},{where : {id:id}}).then((result) => {
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