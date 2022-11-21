//Array Basics

const superHeroes: string[] = [];
//const superHeroes: Array<string> = [];

superHeroes.push("Spiderman");

const heroNumPowers: Array<number> = [];

heroNumPowers.push(2);

type User = 
{
    name: string,
    isActive: boolean
};

const allUsers: Array<User> = [];

allUsers.push({name: "", isActive: true});

//Multi-Dimensional Arrays

const MLModels: number[][] = 
[
    [255, 255, 255],
    []
];

export {}