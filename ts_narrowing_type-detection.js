"use strict";
//Type Detection and Type Narrowing in TS
exports.__esModule = true;
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
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof (strs) == "string") {
            console.log(strs);
        }
    }
}
