"use strict";
//Classes in TS
Object.defineProperty(exports, "__esModule", { value: true });
//Similar to Java Classes (by the way)...
//NOTE: Getters and Setters need flag: "--target es6" at the end since current
//version of Ubuntu-20.04 VM runs on es5 for ECMAScript. -Andrew Tran (11.21.2022)
class User {
    constructor(email, name) {
        //Is visible outside of class (not recommended)
        this.id = 10300;
        this._courseCount = 1;
        this.familyPassword = "";
        this.email = email;
        this.name = name;
    }
    //Getters and Setters (Similar to Java OOP) - Notice "get" and "set" keywords
    set setEmail(newEmail) {
        this.email = newEmail;
    }
    get getEmail() {
        return `apple${this.email}`;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = courseNum;
        this.incrementCourseCount();
        this.deleteToken();
    }
    incrementCourseCount() {
        this._courseCount++;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeFamilyPassword(newPassword) {
        this.familyPassword = newPassword;
    }
}
let newUser = new User("andrew@gmail.com", "Andrew");
