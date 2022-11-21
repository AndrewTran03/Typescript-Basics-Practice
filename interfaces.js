"use strict";
//Interfaces in TS
exports.__esModule = true;
;
;
var newUser = {
    dbId: 1,
    email: "example@google.com",
    userId: 123456,
    githubToken: "0001 0000",
    startTrail: function () {
        return "Trail Started";
    },
    getCoupon: function (couponName, off) {
        return 10;
    }
};
newUser.githubToken = "1234 5678";
;
