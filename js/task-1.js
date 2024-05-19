function makeTransaction(quantity, pricePerDroid) { 
    return quantity * pricePerDroid;
}

makeTransaction(5, 3000)
makeTransaction(3, 1000)
makeTransaction(10, 500)

function makeMessage (name, price) {
return `You picked ${name}, price per item is ${price} credits`
};



console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


