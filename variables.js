"use strict";
//Basic Variable TSC Annotations: let <variable>: <type> = <value>
Object.defineProperty(exports, "__esModule", { value: true });
//Strings
let greetings = "Hello World Andrew";
console.log(greetings);
greetings.toLowerCase();
console.log(greetings);
//Numbers
let userId = 123;
console.log(userId);
let userIdDouble = 123.456;
console.log(userIdDouble);
//Boolean
let isCool = true;
console.log("Andrew is cool. True or False? Answer: " + isCool);
let isClosed = false; //Better Practice - Allow for Type Inference with TS (Not Overusing it Unless Necessary)
console.log("The folder is closed. True or False? Answer: " + isClosed);
//Any - Avoid If Possible - Bad Practice
//The "Any" type opts out of TS type-checking, making TS useless in this case.
//let hero: any;
let hero;
function getHero() {
    return "Thor";
    //return -1;
}
hero = getHero();
console.log(hero);
