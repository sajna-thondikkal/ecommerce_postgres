const Category = require('../models/categories');

// get all categories

function getAllCategories(){
    return new Promise((resolve,reject)=>{
        Category.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get category by id
function getCategoryById(id){
    return new Promise((resolve,reject)=>{
        Category.findByPk(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create category
function createCategory(categoryName){
    return new Promise((resolve,reject)=>{
        Category.create(categoryName).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })

}

// update category
function updateCategory(id,newCategoryName){
    return new Promise((resolve,reject)=>{
        Category.update({categoryName:newCategoryName},{ where: {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(result);
        });
    })
}

// delete category
function deleteCategory(id){
    return new Promise((resolve,reject)=>{
        Category.destroy({where: {id:id}}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}