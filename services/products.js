function findOfferPrice(price){
    const offer = 50 ;
    const offerprice = (parseInt(price) * offer) / 100;
    return offerprice;
}
module.exports = {
    findOfferPrice
}