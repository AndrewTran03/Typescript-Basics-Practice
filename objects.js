"use strict";
exports.__esModule = true;
//Create basic objects with TS
var user = {
    name: "Andrew",
    email: "andrew@gmail.com",
    isActive: true
};
//Passing objects with TS as parameters
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Andrew", isPaid: true });
//Weird behavior of objects in TS
var newUser = { name: "Andrew", isPaid: true, age: 19 };
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
var myUser = {
    _id: "12345",
    name: "A",
    email: "a@a.com",
    isActive: true
};
myUser.email = "andrew@gmail.com";
var myCardDetails = {
    number: "1",
    cardDate: "1/1/01",
    cvv: 1234
};
