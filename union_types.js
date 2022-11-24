"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union Types: Allow for Different Types for a Singular Variable/Structure
let id;
id = 12;
id = "12";
let myUser = {
    name: "Andrew",
    id: 334
};
myUser = { username: "AndrewT", id: 668.123 };
// function getDBId(id: number | string)
// {
//     //Mimicking API calls
//     console.log(`Id is ${id}`);
// }
//getDBId("3");
//getDBId(3);
//Type-Checking for Specific Types in the Union Type
function getDBID(id) {
    if (typeof (id) === "string") //Type Verification
     {
        id.toLowerCase();
    }
    else {
        id += 2;
    }
}
getDBID(45);
//Union Types with Arrays
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
//const data3: string[] | number[] = ["1", "2", 3]; <= Wrong.
//Means that you can have an array of all string or all numbers.
const data3 = ["1", "2", 3]; //Means having
