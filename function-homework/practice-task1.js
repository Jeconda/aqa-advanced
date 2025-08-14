const totalPrice = 2900;
let discountPrice;
let discountPercentage;
if(totalPrice <= 500) {
    discountPercentage = 0;
    discountPrice = totalPrice - (totalPrice * (discountPercentage/100))
    console.log(`${totalPrice}';' ${discountPercentage}';' ${discountPrice};`)
}
else if(totalPrice <= 1000) {
    discountPercentage = 5;
    discountPrice = totalPrice - (totalPrice * (discountPercentage/100))
    console.log(`${totalPrice}; ${discountPercentage}; ${discountPrice};`)
}
else if(totalPrice <= 2000) {
    discountPercentage = 10;
    discountPrice = totalPrice - (totalPrice * (discountPercentage/100))
    console.log(`${totalPrice}; ${discountPercentage}; ${discountPrice};`)
}
else {
   discountPercentage = 15;
   discountPrice = totalPrice - (totalPrice * (discountPercentage/100))
   console.log(`${totalPrice}; ${discountPercentage}; ${discountPrice};`) 
}