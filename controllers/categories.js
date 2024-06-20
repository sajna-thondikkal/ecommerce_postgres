const categoryRepository = require('../repositories/categories');

//@desc get all categories
//@rout GET/api/v1/categories
//access public
async function getAllCategories(req,res){
    try {
        const categories = await categoryRepository.getAllCategories()
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({"error message":error});
    }
}

// @desc get category by id
// @rout GET/api/v1/categories/id
// access public
async function getCategoryById(req,res){
    const id = req.params.id;
    try {
        const category = await categoryRepository.getCategoryById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({message:"Category not found"});
    }
}

//@desc create category
// @rout POST/api/vi/categories
// access public
async function createCategory(req,res){
    const {categoryName} = req.body
    try {
        const newCategory = await categoryRepository.createCategory(categoryName);
        res.status(201).json(newCategory);
    } catch (error) {
        console.log("Error..",error);
        res.status(500).json({error:"Failed to create category"});
    }
}

// @desc update category
// @rout PUT/api/vi/categories/id
// access public
async function updateCategory(req,res){
    const id = req.params.id;
    const {categoryName} = req.body;
    try {
        const category = await categoryRepository.updateCategory(id,categoryName);
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Cannot updated"});
    }
}

// @desc delete a category
// @rout DELETE/api/vi/categories/id
// access public
async function deleteCategory(req,res){
    const id = req.params.id;
    try {
        const category = categoryRepository.deleteCategory(id)
        res.status(200).json({"message":`successfully deleted ${id}`});
    } catch (error) {
        console.log(error);
        res.status(404).json({"message":"Not deleted"});
    }    
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}