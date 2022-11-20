//Problems of JavaScript - No Static Type Checking Until Run-Time
//Causes Major Problems as Complier Does Not Stop Undefined Behavior Beforehand

let user = { name: "Andrew", age: 19 };

console.log(user.name);
console.log(user.age);
//console.log(user.email); //<- Problematic in JavaScript since this object property does NOT exist

export {}