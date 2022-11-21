//Tuples (and Problems with them in TS)
//Specific and strict usage of array order

let user: [string, number, boolean];
user = ["AT", 1234, true];

let rgbValues: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "hc@com";

newUser.push("Hi"); //<= Problems with Tuple: TS restrictions are not being followed

export {}
