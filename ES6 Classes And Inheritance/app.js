/*
const Hamburger = {
    bread: 'Baguette',
    fat: 80,
    meat: 'Mutton',
};

console.log(hamburger);
*/

class Hamburger {
    constructor(bread, fat, meat) {
        this.bread = bread;
        this.fat = fat;
        this.meat = meat;
    }
}

console.log(Hamburger);

const myHamburger1 = new Hamburger('Baguette', 40, 'Mutton');

console.log(myHamburger1);

const myHamburger2 = new Hamburger('Toast', 45, 'Beef');

console.log(myHamburger2);

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    carName() {
        return `My car name is ${brand}`;
    }
}

class Model extends Car {
    constructor(model, brand) {
        super(brand);
        this.model = model;
    }
}
    