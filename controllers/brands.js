const brandRepository = require('../repositories/brands');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');


//@desc get all brands
//@rout GET/brands
//access public
const getAllBrands = asyncHandler(async (req,res,next)=>{
    const allBrands = await brandRepository.getAllBrands();
    res.status(200).json({"success":true,"data":allBrands});
})


//@desc get brand by id
//@rout GET/brands/id
//access public
const getBrandById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const brand = await brandRepository.getBrandById(id);
    if(brand){
        res.status(200).json({"success":true,"data":brand});
    }
    next(new ErrorResponse(`Brand does not exist with id ${id}`,404));
})


//@desc create brand
//@rout POST/brands
//access public
const createBrand = asyncHandler(async (req,res,next)=>{
    const {brandName,category_id} = req.body;
    console.log("message from contro",brandName,category_id);
    const newBrand = await brandRepository.createBrand(brandName,category_id);
    if(newBrand){
        res.status(200).json({"success":true,"data":newBrand});
    }
    next(new ErrorResponse("Brand does not created",404));   
})


//@desc update brands
//@rout PUT/brands/id
//access public
const updateBrand = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const {brandName,category_id} = req.body;
    const brand = await brandRepository.getBrandById(id);
    if(brand){
        const updateBrand = await brandRepository.updateBrand(id,brandName,category_id);
        const updatedBrand = await brandRepository.getBrandById(id);
        res.status(200).json({"success":true,"data":updatedBrand});
    }
    next(new ErrorResponse(`Brand does not exist with id ${id}`,404));
})

//@desc delete brands
//@rout DELETE/brands/id
//access public
const deleteBrand = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const deletedBrand = await brandRepository.deleteBrand(id);
    if(deletedBrand){
        res.status(200).json({"success":true,"message":`deleted brand with id ${id}`});
    }
    next(new ErrorResponse(`Brand does not exist with id ${id}`,404));

})


module.exports = {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}