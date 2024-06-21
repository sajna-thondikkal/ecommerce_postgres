const brandRepository = require('../repositories/brands');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');


// find all brands
const getAllBrands = asyncHandler(async (req,res,next)=>{
    const allBrands = await brandRepository.getAllBrands();
    res.status(200).json({"success":true,"data":allBrands});
})


// find brand by id
const getBrandById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const brand = await brandRepository.getBrandById(id);
    if(brand){
        res.status(200).json({"success":true,"data":brand});
    }
    next(new ErrorResponse(`Brand does not exist with id ${id}`,404));
})


// create a brand
const createBrand = asyncHandler(async (req,res,next)=>{
    const brandName = req.body;
    const newBrand = await brandRepository.createBrand(brandName);
    if(newBrand){
        res.status(200).json({"success":true,"data":newBrand});
    }
    next(new ErrorResponse("Brand does not created",404));   
})


// update brand
const updateBrand = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const {brandName} = req.body;
    const brand = await brandRepository.getBrandById(id);
    if(brand){
        const updateBrand = await brandRepository.updateBrand(id,brandName);
        const updatedBrand = await brandRepository.getBrandById(id);
        res.status(200).json({"success":true,"data":updatedBrand});
    }
    next(new ErrorResponse(`Brand does not exist with id ${id}`,404));
})

// delete brand
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