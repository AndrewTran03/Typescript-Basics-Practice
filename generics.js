"use strict";
//Generics in TS
Object.defineProperty(exports, "__esModule", { value: true });
const scores = [];
const names = [];
//Bad: Limited to Two Types - What happens if the type was 
//different than the one specified?
function identityOne(val) {
    return val;
}
//Bad: "Any" Type is discouraged in this TS example for not
//having good type specificity.
function identityTwo(val) {
    return val;
}
//BETTER!!: Use Generics to maintain same type but when not
//definitely sure at compile-time which type you want to use
//in particular.
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
identityThree("Andrew");
identityThree(true);
//Generics can just be a singular, arbituary letter like Java.
//Just needs to match.
function identityFour(val) {
    return val;
}
identityFour("Andrew T");
;
let newBottle = {
    brand: "Water",
    type: 1
};
identityFour(newBottle);
identityFour({ brand: "Aqua", type: 2 });
//Arrays and Generics
function getSearchProducts(products) {
    //Suppose if we were doing some complex database operations...
    let returnIndex = 3;
    return products[returnIndex];
}
const getMoreSearchProducts = (products) => {
    //Suppose if we were doing some more complex database operations...
    let returnIndex = 4;
    return products[returnIndex];
};
;
// function anotherGenericFunction<T, U extends number>(valOne: T, valTwo: U): object
// {
//     return {valOne, valTwo};
// }
//anotherGenericFunction(3, "4");
function anotherGenericFunction2(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherGenericFunction2("Andrew", {
    connection: "Strong",
    username: "andrewt03",
    password: "1234"
});
;
;
//Generic Classes
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
