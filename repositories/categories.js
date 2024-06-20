const Category = require('../models/categories');

// get all categories
async function getAllCategories(){
    const categories = await Category.findAll();
    return categories;
}

// get category by id
async function getCategoryById(id){
    const category = await Category.findByPk(id);
    return category;
}

// create category
async function createCategory(categoryName){
    const [category,created] = await Category.findOrCreate({
        where: {categoryName},
        defaults: {categoryName}
    });
    return category;
}

// update category
async function updateCategory(id,newCategoryName){
    const [updatedCategory] = await Category.update(
        {categoryName:newCategoryName},
        { where: {
            id:id
        }}
    );
    const updatedCategoryName = await Category.findByPk(id);
    return updatedCategoryName;
}

// delete category
async function deleteCategory(id){
    const category = await Category.findByPk(id);
    await category.destroy();

}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}