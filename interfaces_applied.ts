//Why are Interfaces Important?

//Importance: Gives skeleton or "minimal requirements" for
//a class that extends that structure but leaves implementation
//free for interpretation.

interface TakePhoto
{
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story
{
    createStory(): void
}

class Instagram implements TakePhoto
{
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number) 
    {}
}

class YouTube implements TakePhoto, Story
{
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number) 
    {}

    public createStory(): void
    {
        console.log("Story was created"); 
    }
}

export {}
