function calculateDiscountedPrice(totalPrice) {
    let discountPercentage;
    if(totalPrice <= 500) {
    discountPercentage = 0;
    }
    else if(totalPrice <= 1000) {
        discountPercentage = 5;
    }
    else if(totalPrice <= 2000) {
        discountPercentage = 10;
    }
        else{
        discountPercentage = 15;
    }
    let discountPrice = totalPrice - (totalPrice * (discountPercentage/100));
    return discountPrice;
}
const price1 = calculateDiscountedPrice(2500);
const price2 = calculateDiscountedPrice(750);
const price3 = calculateDiscountedPrice(400);
console.log(price1);
console.log(price2);
console.log(price3);