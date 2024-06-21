const categoryRepository = require('../repositories/categories');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');



//@desc get all categories
//@rout GET/api/v1/categories
//access public
const getAllCategories = asyncHandler(async (req,res,next)=>{
    const categories = await categoryRepository.getAllCategories();
    res.status(200).json({"success":true,"data":categories});
})

// @desc get category by id
// @rout GET/api/v1/categories/id
// access public
const getCategoryById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const category = await categoryRepository.getCategoryById(id);
    if(category){
        res.status(200).json({"success":true,"data":category});
    }
    next(new ErrorResponse(`Category does not exist with id ${id}`,404)); 
})

//@desc create category
// @rout POST/api/vi/categories
// access public
const createCategory = asyncHandler(async (req,res,next)=>{
    const categoryName = req.body;
    const newCategory = await categoryRepository.createCategory(categoryName);
    if(newCategory){
        res.status(200).json({"success":true,"data":newCategory});
    }
    next(new ErrorResponse("Category does not created",404)); 
})

// @desc update category
// @rout PUT/api/vi/categories/id
// access public
const updateCategory = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const {categoryName} = req.body;
    const category = await categoryRepository.getCategoryById(id);
    if(category){
        const update = await categoryRepository.updateCategory(id,categoryName);
        const updatedcategory = await categoryRepository.getCategoryById(id);
        res.status(200).json({"success":true,"data":updatedcategory});
    }
    next(new ErrorResponse(`Category does not exist with id ${id}`,404));
})


// @desc delete a category
// @rout DELETE/api/vi/categories/id
// access public
const deleteCategory = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const deletedcategory = categoryRepository.deleteCategory(id);
    if(deletedcategory){
        res.status(200).json({"success":true,"message":`deleted category with id ${id}`});
    }
    next(new ErrorResponse(`Category does not exist with id ${id}`,404));
})

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}