//Interfaces in TS

//Interfaces are different than types because you can define
//a combination of data types and function headers as well
//(implementations come afterward as you will see when we get
//to classes in TS).

interface User 
{
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: number

    //startTrail: () => string
    startTrail(): string;

    getCoupon(couponName: string, off: number): number;
};

// const newUser: User =
// {
//     dbId: 1,
//     email: "example@google.com",
//     userId: 123456,

//     startTrail: () =>
//     {
//         return "Trail Started";    
//     },

//     getCoupon: (couponName: "COUPON NAME #1", off: 10) => 
//     {
//         return 10;
//     }
// };

//newUser.dbId = 33;

//Appending to an Existing Interface (Usually in a Different File)
interface User 
{
    githubToken: string
};

const newUser: User =
{
    dbId: 1,
    email: "example@google.com",
    userId: 123456,
    githubToken: "0001 0000",

    startTrail: () =>
    {
        return "Trail Started";    
    },

    getCoupon: (couponName: "COUPON NAME #1", off: 10) => 
    {
        return 10;
    }
};

newUser.githubToken = "1234 5678";

//Interface Inheritance
interface Admin extends User
{
    role: "Admin" | "TA" | "Learner/Student"
};

export {}
