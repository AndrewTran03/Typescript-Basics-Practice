//Generics in TS

const scores: Array<number> = [];
const names: Array<string> = [];

//Bad: Limited to Two Types - What happens if the type was 
//different than the one specified?
function identityOne(val: boolean | number): boolean | number 
{
    return val;
}

//Bad: "Any" Type is discouraged in this TS example for not
//having good type specificity.
function identityTwo(val: any): any
{
    return val;
}

//BETTER!!: Use Generics to maintain same type but when not
//definitely sure at compile-time which type you want to use
//in particular.
function identityThree<Type>(val: Type): Type
{
    return val;
}

identityThree(3);
identityThree("3");
identityThree("Andrew");
identityThree(true);

//Generics can just be a singular, arbituary letter like Java.
//Just needs to match.
function identityFour<T>(val: T): T
{
    return val;
}

identityFour("Andrew T");

interface Bottle
{
    brand: string,
    type: number
};

let newBottle: Bottle =
{
    brand: "Water",
    type: 1
};

identityFour(newBottle);
identityFour<Bottle>({brand: "Aqua", type: 2});

//Arrays and Generics

function getSearchProducts<T>(products: T[]): T
{
    //Suppose if we were doing some complex database operations...
    let returnIndex = 3;
    return products[returnIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T => 
{
    //Suppose if we were doing some more complex database operations...
    let returnIndex = 4;
    return products[returnIndex];
};

interface Database 
{
    connection: string,
    username: string,
    password: string
};

// function anotherGenericFunction<T, U extends number>(valOne: T, valTwo: U): object
// {
//     return {valOne, valTwo};
// }

//anotherGenericFunction(3, "4");

function anotherGenericFunction2<T, U extends Database>(valOne: T, valTwo: U): object
{
    return {valOne, valTwo};
}

anotherGenericFunction2("Andrew", {   
    connection: "Strong", 
    username: "andrewt03",
    password: "1234"
})

//Generics with Interfaces and Classes (Known as Generic Classes)

interface Quiz
{
    name: string,
    type: string
};

interface Course
{
    name: string,
    author: string,
    subject: string
};

//Generic Classes
class Sellable<T>
{
    public cart: T[] = []

    public addToCart(products: T)
    {
        this.cart.push(products);
    }
}

export {}
