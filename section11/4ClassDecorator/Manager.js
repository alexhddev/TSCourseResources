"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Manager = class Manager {
    constructor() {
        this.task = 'Simple task';
        this.project = 'Simple project';
        console.log('Initializing the Manager class');
    }
};
Manager = __decorate([
    withEmploymentDate,
    withEmploymentDateOnPrototype,
    sealed
], Manager);
console.log(new Manager());
function withEmploymentDateOnPrototype(arg) {
    arg.prototype.employmentDateOnPrototype = new Date().toISOString();
}
function withEmploymentDate(baseClass) {
    console.log('Invoking decorator!!!');
    return class extends baseClass {
        constructor(...args) {
            super(...args);
            this.employmentDate = new Date().toISOString();
            console.log('Adding employment date to ' + baseClass.name);
        }
    };
}
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
