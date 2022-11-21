function addTwo(num: number): number //<= Always annotate function return type for type safety
{
    //return "hello"; //<= Function returns will check for invalid returns if given type annotations 
    return num + 2;
}

let result = addTwo(5);
console.log(result);

function getUpper(val: string)
{
    return val.toUpperCase();
}

//getUpper(4); <- Function type parameters are compulsory for type-checking in TS.
getUpper("4");
getUpper("name");

function signUpUser(name: string, email: string, password: string, isPaid: boolean){}

//signUpUser(1, 2, 3, 4); <- Any type issue once more
signUpUser("Andrew", "andrewt@yahoo.com", "Password", false);

//TS with JS Arrow Functions

//Function Parameters (Default Value): <variable>: <type> = <default value>
let loginUser = (name: string, email: string, isCool: boolean = false) => {}
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

const getHello = (s: string): string => 
{
    return "hello";
}

const heroes = ["Thor", "Superman", "Iron-Man"];
//const heroes = [1, 2, 3];

heroes.map((hero: string): string =>
{
    return `Hero is ${hero}`;
})

//Void Type: No return type
function printConsoleError(errorMsg: string): void
{
    console.log(errorMsg);
    //return 1;
}

//"Never" Type: No return type, more for handling errors or (INTENTIONAL) crashing of programs
function handleErrors(msg: string): never
{
    throw new Error(msg);
}


export {}
