const productRepository = require('../repositories/products');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');
const productServices = require('../services/products.js')
// const findOfferPrice = require('../services/offerprice.js');


//@desc get all products
//@rout GET/products
//access public
const getAllProducts = asyncHandler( async (req,res,next)=>{
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
})

//@desc get product by id
//@rout GET/brands/id
//access public
const getProductById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const product = await productRepository.getProductById(id);
    if(product){
        res.status(200).json({"success":true,"data":product});
    }
    next(new ErrorResponse(`Product does not exist with id ${id}`,404));
})

//@desc create product
//@rout POST/brands
//access public
const createProduct = asyncHandler(async (req,res,next)=>{
    const {productName,price,category_id,brand_id}= req.body;
    const offerPrice = productServices.findOfferPrice(price)
    // const offerPrice = findOfferPrice(price);
    const newProduct = await productRepository.createProduct(productName,price,offerPrice,category_id,brand_id);
    if(newProduct){
        res.status(200).json({"success":true,"data":newProduct});
    }
})

//@desc update product
//@rout PUT/brands/id
//access public
const updateProduct = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const {productName,price,category_id,brand_id} = req.body;
    offerPrice = findOfferPrice(price);
    const product = await productRepository.getProductById(id);
    if(product){
        const updateproduct = await productRepository.updateProduct(id,productName,price,offerPrice,category_id,brand_id);
        const updatedProduct = await productRepository.getProductById(id);
        res.status(200).json({"success":true,"data":updatedProduct});
    }
    next(new ErrorResponse(`Product does not exist with id ${id}`,404));
})

//@desc delete product
//@rout DELETE/brands/id
//access public
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