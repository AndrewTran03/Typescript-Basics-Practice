"use strict";
//Why are Interfaces Important?
exports.__esModule = true;
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var YouTube = /** @class */ (function () {
    function YouTube(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    YouTube.prototype.createStory = function () {
        console.log("Story was created");
    };
    return YouTube;
}());
