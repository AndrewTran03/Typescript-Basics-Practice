"use strict";
//Tuples (and Problems with them in TS)
//Specific and strict usage of array order
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = ["AT", 1234, true];
let rgbValues = [255, 123, 112];
const newUser = [112, "example@google.com"];
newUser[1] = "hc@com";
newUser.push("Hi"); //<= Problems with Tuple: TS restrictions are not being followed
