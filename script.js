const sayHello = function (age) {
    if (age >=18) {
        return true;
    } else {
        return false;
    }
};


const sayHello2 = function (age) {
    if (sayHello(age)) {
        return 'Hello there';
    } else {
        return 'Hey kiddo';
    }
};

console.log(sayHello2(45));
console.log(sayHello2(15));

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));