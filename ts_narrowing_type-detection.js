"use strict";
//Type Detection and Type Narrowing in TS
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof (val) === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}
//DO NOT DO THIS!
function printAll(strs) {
    //Be careful here...we did not account for all of the
    //truthy/falsy values here (this case: "" - empty string).
    if (strs) {
        if (typeof (strs) === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof (strs) == "string") {
            console.log(strs);
        }
    }
}
;
;
function isAdminAccount(account) {
    //"In" Operator: Checks if that property exists within
    //the parameter object passed in currently
    //Admin Case
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//Instanceof Keyword
//Only can be used with variables created with the "new" keyword - 
//AKA Instantitated Objects
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; //Determined this is a Fish type
        return "Fish Food";
    }
    else {
        pet; //Determined this is a Bird type
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side ** 2; //<= Note: Did not do exhausive search here.
    //Definitely recommended to look at example below for better TS practices 
    //in terms of type-narrowing/type-detection. 
}
//Exhaustive Checking
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default: //If parameter does not match types (always include a "never" type) - error checking
            const defaultValForShape = shape;
            return defaultValForShape;
    }
}
