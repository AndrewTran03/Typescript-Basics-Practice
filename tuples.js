"use strict";
//Tuples (and Problems with them in TS)
//Specific and strict usage of array order
exports.__esModule = true;
var user;
user = ["AT", 1234, true];
var rgbValues = [255, 123, 112];
var newUser = [112, "example@google.com"];
newUser[1] = "hc@com";
newUser.push("Hi"); //<= Problems with Tuple: TS restrictions are not being followed
