const Product = require('../models/products');

// get all products
async function getAllProducts(){
    const products = await Product.findAll();
    return products;
}

// get product by id
async function getProductById(id){
    const product = await Product.findByPk(id);
    return product;
}

// create product
async function createProduct(productName,price,offerPrice){
    const newProduct = await Product.create(productName,price,offerPrice);
    return newProduct;
}

// update product
async function updateProduct(id,productName){
    const product = await Product.update(
        { productName: productName},
        { where : {id:id}}
    );
    const updatedProduct = await Product.findByPk(id);
    return updatedProduct;
}
// delete product
async function deleteProduct(id){
    const product = await Product.findByPk(id);
    product.destroy();
}
module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    
}