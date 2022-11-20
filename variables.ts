//Basic Variable TSC Annotations: let <variable>: <type> = <value>

//Strings

let greetings: string = "Hello World Andrew";
console.log(greetings);

greetings.toLowerCase();
console.log(greetings);

//Numbers

let userId: number = 123;
console.log(userId);

let userIdDouble: number = 123.456;
console.log(userIdDouble);

//Boolean

let isCool: boolean = true; 
console.log("Andrew is cool. True or False? Answer: " + isCool); 

let isClosed = false; //Better Practice - Allow for Type Inference with TS (Not Overusing it Unless Necessary)
console.log("The folder is closed. True or False? Answer: " + isClosed);

//Any - Avoid If Possible - Bad Practice
//The "Any" type opts out of TS type-checking, making TS useless in this case.

//let hero: any;
let hero: string;

function getHero()
{
    return "Thor";
    //return -1;
}

hero = getHero();
console.log(hero);

export {}