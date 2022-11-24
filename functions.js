"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //return "hello"; //<= Function returns will check for invalid returns if given type annotations 
    return num + 2;
}
let result = addTwo(5);
console.log(result);
function getUpper(val) {
    return val.toUpperCase();
}
//getUpper(4); <- Function type parameters are compulsory for type-checking in TS.
getUpper("4");
getUpper("name");
function signUpUser(name, email, password, isPaid) { }
//signUpUser(1, 2, 3, 4); <- Any type issue once more
signUpUser("Andrew", "andrewt@yahoo.com", "Password", false);
//TS with JS Arrow Functions
//Function Parameters (Default Value): <variable>: <type> = <default value>
let loginUser = (name, email, isCool = false) => { };
loginUser("Andrew", "andrewt@yahoo.com");
// function getValue(myVal: number): boolean
// {
//     if(myVal > 5)
//     {
//         return true;
//     }
//     else 
//     {
//         return "200 OK";
//     }
// }
const getHello = (s) => {
    return "hello";
};
const heroes = ["Thor", "Superman", "Iron-Man"];
//const heroes = [1, 2, 3];
heroes.map((hero) => {
    return `Hero is ${hero}`;
});
//Void Type: No return type
function printConsoleError(errorMsg) {
    console.log(errorMsg);
    //return 1;
}
//"Never" Type: No return type, more for handling errors or (INTENTIONAL) crashing of programs
function handleErrors(msg) {
    throw new Error(msg);
}
