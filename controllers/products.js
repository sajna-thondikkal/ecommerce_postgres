const productRepository = require('../repositories/products');

// get all products
async function getAllProducts(req,res){
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
}
// get product by id
async function getProductById(req,res){
    const id = req.params.id;
    const product = await productRepository.getProductById(id);
    res.status(200).json(product);
}

// create a product
async function createProduct(req,res){
    const productName = req.body;
    const price = req.body;
    const offerPrice = req.body;
    const newProduct = await productRepository.createProduct(productName,price,offerPrice);
    res.status(200).json(newProduct);
}

// update product
async function updateProduct(req,res){
    const id = req.params.id;
    const {productName} = req.body;
    const product = await productRepository.updateProduct(id,productName);
    res.status(200).json(product);
}
// delete product
async function deleteProduct(req,res){
    const id = req.params.id;
    await productRepository.deleteProduct(id);
    res.status(200).json({"message":`Succesfully deleted product with id ${id}`});
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    
}