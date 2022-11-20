"use strict";
//Problems of JavaScript - No Static Type Checking Until Run-Time
//Causes Major Problems as Complier Does Not Stop Undefined Behavior Beforehand
exports.__esModule = true;
var user = { name: "Andrew", age: 19 };
console.log(user.name);
console.log(user.age);
