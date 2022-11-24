"use strict";
//Abstract Classes in TS
Object.defineProperty(exports, "__esModule", { value: true });
//Abstract Classes vs. Interfaces: Certain methods in an
//abstract class are NOT implemented rather than all of the
//method. This is the responsiblity of the user to implement
//these methods marked as "abstract" in order to comply with
//this structure. Similar to Java OOP once more.
class TakePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getRealTime() {
        let calc = 60 / 10;
        return calc;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getRealTime() {
        return super.getRealTime() + 2;
    }
    takePhoto() {
        console.log("Photo was taken");
    }
}
