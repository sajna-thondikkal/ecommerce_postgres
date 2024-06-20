const Category = require('../models/categories');

//@desc get all categories
//@rout GET/api/v1/categories
//access public
async function getAllCategories(req,res){
    try {
        const categories = await Category.findAll();
        return res.status(201).json(categories);
    } catch (error) {
        return res.status(400).json({message:"categories not found"});
    }
}

// @desc get category by id
// @rout GET/api/v1/categories/id
// access public
async function getCategoryById(req,res){
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({message:"Category not found"});
    }
}

//@desc create category
// @rout POST/api/vi/categories
// access public
async function createCategory(req,res){
    try {
        const categoryName = req.body;
        const newCategory = await Category.create(categoryName);
        return res.status(201).json(newCategory);
    } catch (error) {
        console.log("Error..",error);
        return res.status(500).json({error:"Failed to create category"});
    }
}
// @desc update category
// @rout PUT/api/vi/categories/id
// access public
async function updateCategory(req,res){
    const id = req.params.id;
    const {categoryName} = req.body;
    try {
        const category = await Category.findByPk(id);
        category.categoryName = categoryName;
        category.save();
        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Cannot updated"});
    }
}

// @desc delete a category
// @rout DELETE/api/vi/categories/id
// access public
async function deleteCategory(req,res){
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id);
        await category.destroy();
        return res.status(200).json({"message":`successfully deleted ${id}`});
    } catch (error) {
        console.log(error);
        return res.status(404).json({"message":"Not deleted"});
    }    
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}