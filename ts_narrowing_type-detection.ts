//Type Detection and Type Narrowing in TS

function detectType(val: number | string)
{
    if(typeof(val) === "string")
    {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null)
{
    if(!id)
    {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}

//DO NOT DO THIS!
function printAll(strs: string | string[] | null)
{
    //Be careful here...we did not account for all of the
    //truthy/falsy values here (this case: "" - empty string).
    if(strs)
    {
        if(typeof(strs) === "object")
        {
            for(const s of strs)
            {
                console.log(s);
            }
        }
        else if(typeof(strs) == "string")
        {
            console.log(strs);
        }
    }
}

interface User
{
    name: string,
    email: string
};

interface Admin
{
    name: string,
    email: string,
    isAdmin: boolean
};

function isAdminAccount(account: User | Admin)
{
    //"In" Operator: Checks if that property exists within
    //the parameter object passed in currently
    //Admin Case
    if("isAdmin" in account)
    {
        return account.isAdmin;
    }
}

//Instanceof Keyword

//Only can be used with variables created with the "new" keyword - 
//AKA Instantitated Objects

function logValue(x: Date | string)
{
    if(x instanceof Date)
    {
        console.log(x.toUTCString());
    }
    else 
    {
        console.log(x.toUpperCase());
    }
}

//Type Predicates

//Works when we have identified which type the object
//returned is...uses type-casting once identification
//is achieved:
//Syntax - function <name>(params...): param is <object> {}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish
{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird)
{
    if(isFish(pet))
    {
        pet //Determined this is a Fish type
        return "Fish Food";
    }
    else 
    {
        pet //Determined this is a Bird type
        return "Bird Food";
    }
}

//Discriminated Unions

interface Circle
{
    kind: "circle",
    radius: number
}

interface Square
{
    kind: "square",
    side: number
}

interface Rectangle
{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape)
{
    if(shape.kind === "circle")
    {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side ** 2; //<= Note: Did not do exhausive search here.
    
    //Definitely recommended to look at example below for better TS practices 
    //in terms of type-narrowing/type-detection. 
}

//Exhaustive Checking

function getArea(shape: Shape)
{
    switch(shape.kind)
    {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default: //If parameter does not match types (always include a "never" type) - error checking
            const defaultValForShape: never = shape;
            return defaultValForShape;
    }
}

export {}
