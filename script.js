const sayHello = function (age) {
    if (age >18) {
        return true;
    } else {
        return false;
    }
};


const sayHello2 = function () {
    const age2 = sayHello();
    console.log('Hello there')
     
};

sayHello2();