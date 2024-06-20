const express = require('express');
const router = express.Router();
const Category = require('../models/categories');

// get all category
router.get('/',async (req,res)=>{
    try {
        const categories = await Category.findAll();
        return res.status(201).json(categories);
    } catch (error) {
        return res.status(400).json({message:"categories not found"});
    }
})
// get category by id
router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({message:"Category not found"});
    }

})

// create category
router.post('/',async (req,res)=>{
    try {
        const categoryName = req.body;
        const newCategory = await Category.create(categoryName);
        return res.status(201).json(newCategory);
    } catch (error) {
        console.log("Error..",error);
        return res.status(500).json({error:"Failed to create category"});
    }
})

// update category
router.put('/:id',async (req,res)=>{
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
})

// delete category
router.delete('/:id', async (req,res)=>{
    const id = req.params.id;
    try {
        const category = await Category.findByPk(id);
        await category.destroy();
        return res.status(200).json({"message":`successfully deleted ${id}`});
    } catch (error) {
        console.log(error);
        return res.status(404).json({"message":"Not deleted"});
    }    
})
module.exports = router;