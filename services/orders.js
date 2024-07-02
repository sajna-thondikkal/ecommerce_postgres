
// function to find total price of each item
function itemTotel(orderlineitems){
    for(const item of orderlineitems){
        const price = item.unit_price * item.quantity;
        item.item_price = price
    }
    return orderlineitems;
}

// function to find grand total of each purchase
function grandTotal(orderlineitems){
    sum = 0;
    for(const item of orderlineitems){
        sum = sum + item.item_price;
    }
    return sum;
}

module.exports = {
    grandTotal,
    itemTotel
}