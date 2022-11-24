"use strict";
//Interfaces in TS
Object.defineProperty(exports, "__esModule", { value: true });
;
;
const newUser = {
    dbId: 1,
    email: "example@google.com",
    userId: 123456,
    githubToken: "0001 0000",
    startTrail: () => {
        return "Trail Started";
    },
    getCoupon: (couponName, off) => {
        return 10;
    }
};
newUser.githubToken = "1234 5678";
;
