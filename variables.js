"use strict";
//Basic Variable TSC Annotations: let <variable>: <type> = <value>
exports.__esModule = true;
//Strings
var greetings = "Hello World Andrew";
console.log(greetings);
greetings.toLowerCase();
console.log(greetings);
//Numbers
var userId = 123;
console.log(userId);
var userIdDouble = 123.456;
console.log(userIdDouble);
//Boolean
var isCool = true;
console.log("Andrew is cool. True or False? Answer: " + isCool);
var isClosed = false; //Better Practice - Allow for Type Inference with TS (Not Overusing it Unless Necessary)
console.log("The folder is closed. True or False? Answer: " + isClosed);
//Any - Avoid If Possible - Bad Practice
//The "Any" type opts out of TS type-checking, making TS useless in this case.
//let hero: any;
var hero;
function getHero() {
    return "Thor";
    //return -1;
}
hero = getHero();
console.log(hero);
