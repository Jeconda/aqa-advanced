function checkOrder(available, ordered){
    if(ordered > available){
        return ('Your order is too large, we don’t have enough goods');
    }
    else if(ordered === 0){
        return ('Your order is empty');
    }
    else{
        return ('Your order is accepted');
    }
}
console.log(checkOrder(10, 5));
console.log(checkOrder(5, 0));
console.log(checkOrder(5, 10));