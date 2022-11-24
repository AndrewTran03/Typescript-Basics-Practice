"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create basic objects with TS
const user = {
    name: "Andrew",
    email: "andrew@gmail.com",
    isActive: true
};
//Passing objects with TS as parameters
function createUser({ name, isPaid }) {
}
createUser({ name: "Andrew", isPaid: true });
//Weird behavior of objects in TS
let newUser = { name: "Andrew", isPaid: true, age: 19 };
createUser(newUser);
//Returning objects with TS
function createCourse() {
    return { name: "React JS", price: 399.99 };
}
createCourse();
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });
function printCoordinate(pt) {
    console.log("The x-coordinate's value is " + pt.x);
    console.log("The y-coordinate's value is " + pt.y);
}
printCoordinate({ x: 100, y: 100 });
let myUser = {
    _id: "12345",
    name: "A",
    email: "a@a.com",
    isActive: true
};
myUser.email = "andrew@gmail.com";
let myCardDetails = {
    number: "1",
    cardDate: "1/1/01",
    cvv: 1234
};
