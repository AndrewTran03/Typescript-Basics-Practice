//Abstract Classes in TS

//Abstract Classes vs. Interfaces: Certain methods in an
//abstract class are NOT implemented rather than all of the
//method. This is the responsiblity of the user to implement
//these methods marked as "abstract" in order to comply with
//this structure. Similar to Java OOP once more.

abstract class TakePhoto
{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number)
    {}

    public getRealTime(): number
    {
        let calc: number = 60 / 10;
        return calc;
    }

    public abstract takePhoto(): void; //Note the usage of "abstract" keyword here
}

class Instagram extends TakePhoto
{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number)
    {
        super(cameraMode, filter, burst);
    }

    public getRealTime(): number 
    {
        return super.getRealTime() + 2;
    }

    public takePhoto(): void
    {
        console.log("Photo was taken");
    }
}

export {}
