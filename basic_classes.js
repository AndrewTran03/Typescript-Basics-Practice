//Classes in TS
//Similar to Java Classes (by the way)...
class User {
    constructor(email, name) {
        //Is visible outside of class (not recommended)
        this.id = 10300;
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
