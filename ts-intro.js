"use strict";
//Problems of JavaScript - No Static Type Checking Until Run-Time
//Causes Major Problems as Complier Does Not Stop Undefined Behavior Beforehand
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Andrew", age: 19 };
console.log(user.name);
console.log(user.age);
