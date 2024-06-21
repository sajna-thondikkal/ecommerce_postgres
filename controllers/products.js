const productRepository = require('../repositories/products');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');


// get all products
const getAllProducts = asyncHandler( async (req,res,next)=>{
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
})

// get product by id
const getProductById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const product = await productRepository.getProductById(id);
    if(product){
        res.status(200).json({"success":true,"data":product});
    }
    next(new ErrorResponse(`Product does not exist with id ${id}`,404));
})

// create a product
const createProduct = asyncHandler(async (req,res,next)=>{
    const productName= req.body;
    const price = req.body;
    const offerPrice = req.body;
    const newProduct = await productRepository.createProduct(productName,price,offerPrice);
    if(newProduct){
        res.status(200).json({"success":true,"data":newProduct});
    }
})

// update product
const updateProduct = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const {productName} = req.body;
    const product = await productRepository.getProductById(id);
    if(product){
        const updateproduct = await productRepository.updateProduct(id,productName);
        const updatedProduct = await productRepository.getProductById(id);
        res.status(200).json({"success":true,"data":updatedProduct});
    }
    next(new ErrorResponse(`Product does not exist with id ${id}`,404));
})

// delete product
const deleteProduct = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const deletedProduct = await productRepository.deleteProduct(id);
    if(deletedProduct){
        res.status(200).json({"success":true,"message":`deleted product with id ${id}`});
    }
    next(new ErrorResponse(`Product does not exist with id ${id}`,404));
})

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    
}