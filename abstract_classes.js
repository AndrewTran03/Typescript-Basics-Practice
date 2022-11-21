"use strict";
//Abstract Classes in TS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Abstract Classes vs. Interfaces: Certain methods in an
//abstract class are NOT implemented rather than all of the
//method. This is the responsiblity of the user to implement
//these methods marked as "abstract" in order to comply with
//this structure. Similar to Java OOP once more.
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    TakePhoto.prototype.getRealTime = function () {
        var calc = 60 / 10;
        return calc;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter, burst) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getRealTime = function () {
        return _super.prototype.getRealTime.call(this) + 2;
    };
    Instagram.prototype.takePhoto = function () {
        console.log("Photo was taken");
    };
    return Instagram;
}(TakePhoto));
