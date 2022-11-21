//Classes in TS

//Similar to Java Classes (by the way)...

class User
{
    private email: string; //Private: Not visible outside of class
    public name: string; //Public (Auto-Scope with no visibility modifier):
                         //Is visible outside of class (not recommended)
    readonly id: number = 10300;
    private _courseCount: number;
    protected familyPassword: string;

    constructor(email: string, name: string)
    {
        this.email = email;
        this.name = name;
    }

    //Getters and Setters (Similar to Java OOP) - Notice "get" and "set" keywords
    public set setEmail(newEmail: string)
    {
        this.email = newEmail;
    }

    public get getEmail(): string
    {
        return `apple${this.email}`;
    }

    public set setCourseCount(courseNum: number)
    {
        if(courseNum <= 1)
        {
            throw new Error("Course count should be greater than 1");
        }
        this._courseCount = courseNum;
        this.incrementCourseCount();
        this.deleteToken();
    }

    public incrementCourseCount()
    {
        this._courseCount++;
    }

    private deleteToken(): void //Private methods cannot be accessed outside of class
    {
        console.log("Token deleted");
    }
}

class SubUser extends User
{
    private isFamily: boolean = true;

    public changeFamilyPassword(newPassword: string): void 
    {
        this.familyPassword = newPassword;
    }
}

let newUser = new User("andrew@gmail.com", "Andrew");

//newUser.id = "Andrew";
//newUser.email = "andrewt03@google.edu";
//newUser.deleteToken();

export {}