const brandRepository = require('../repositories/brands');

// find all brands
async function getAllBrands(req,res){
    const allBrands = await brandRepository.getAllBrands();
    res.status(200).json(allBrands);
}

// find brand by id
async function getBrandById(req,res){
    const id = req.params.id;
    const brand = await brandRepository.getBrandById(id);
    res.status(200).json(brand);
}

// create a brand
async function createBrand(req,res){
    const brandName = req.body;
    const newBrand = await brandRepository.createBrand(brandName);
    res.status(200).json(newBrand);
}

// update brand
async function updateBrand(req,res){
    const id = req.params.id;
    const {brandName} = req.body;
    const updatedbrand = await brandRepository.updateBrand(id,brandName);
    res.status(200).json(updatedbrand);
}
// delete brand
async function deleteBrand(req,res){
    const id = req.params.id;
    await brandRepository.deleteBrand(id);
    res.status(200).json({"message":`Successfully deleted brand with id ${id}`});
}

module.exports = {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
}