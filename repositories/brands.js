const Brands = require('../models/brands');

// get all brands
async function getAllBrands(){
    const allBrands = await Brands.findAll();
    return allBrands;
}
// get brand by id
async function getBrandById(id){
    const brand = await Brands.findByPk(id);
    return brand;
}

// create brand
async function createBrand(brandName){
    const newBrand = await Brands.create(brandName);
    return newBrand;
}

// update brand
async function updateBrand(id,brandName){
    const updatedBrand = await Brands.update(
        {brandName:brandName},
        {where : {
            id:id
        }}
    );
    const brand = await Brands.findByPk(id);
    return brand;
}

// delete brand
async function deleteBrand(id){
    const brand = await Brands.findByPk(id);
    brand.destroy();
}
module.exports = {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}