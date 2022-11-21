//Create basic objects with TS
const user = 
{
    name: "Andrew",
    email: "andrew@gmail.com",
    isActive: true
}

//Passing objects with TS as parameters
function createUser({name: string, isPaid: boolean}) {}

createUser({name: "Andrew", isPaid: true});

//Weird behavior of objects in TS
let newUser = {name: "Andrew", isPaid: true, age: 19};

createUser(newUser);

//Returning objects with TS
function createCourse(): {name: string, price: number}
{
    return {name: "React JS", price: 399.99};
}

createCourse();


//Type Aliases
type User = 
{
    name: string;
    email: string;
    isActive: boolean;
}

function createUser2(user: User): User 
{
    return {name: "", email: "", isActive: true};
}

type MyString = string;
type bool = boolean;

createUser2({name: "", email: "", isActive: true});

type Point =
{
    x: number;
    y: number;
};

function printCoordinate(pt: Point): void
{
    console.log("The x-coordinate's value is " + pt.x);
    console.log("The y-coordinate's value is " + pt.y);
}

printCoordinate({x: 100, y: 100});

type User2 =
{
    readonly _id: string, //Non-mutable value
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number //"?:" Optional Values (Ignored by TSC if not added)
};

let myUser: User2 =
{
    _id: "12345",
    name: "A",
    email: "a@a.com",
    isActive: true
}

myUser.email = "andrew@gmail.com";
//myUser._id = "asa"; //<= Cannot change a Readonly Variable

type cardNumber = 
{
    number: string
};

type cardDate = 
{
    cardDate: string
};

//Ampersand (And) Operator in TS: Combine Types Together
type cardDetails = cardNumber & cardDate & 
{
    cvv: number
};

let myCardDetails: cardDetails =
{
    number: "1",
    cardDate: "1/1/01",
    cvv: 1234
};

export {}