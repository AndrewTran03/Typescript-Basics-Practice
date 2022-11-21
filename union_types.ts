//Union Types: Allow for Different Types for a Singular Variable/Structure
let id: number | string;

id = 12;
id = "12";

type User =
{
    name: string,
    id: number
};

type Admin = 
{
    username: string,
    id: number
};

let myUser: User | Admin = 
{
    name: "Andrew",
    id: 334
};

myUser = {username: "AndrewT", id: 668.123};

// function getDBId(id: number | string)
// {
//     //Mimicking API calls
//     console.log(`Id is ${id}`);
// }

//getDBId("3");
//getDBId(3);

//Type-Checking for Specific Types in the Union Type
function getDBID(id: number | string)
{
    if(typeof(id) === "string") //Type Verification
    {
        id.toLowerCase();
    }
    else 
    {
        id += 2;
    }
}

getDBID(45);

//Union Types with Arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
//const data3: string[] | number[] = ["1", "2", 3]; <= Wrong.
//Means that you can have an array of all string or all numbers.
const data3: (string | number)[] = ["1", "2", 3]; //Means having
//a union type of string or number types in your arrays

export {}