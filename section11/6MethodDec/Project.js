"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Project {
    constructor() {
        this.budget = 900;
    }
    writeTests() {
        console.log('Tests are important!!!');
    }
    fixBugInProduction() {
        console.log('Fixing bug in production .... :(((');
    }
}
__decorate([
    logDecoratorInternals2
], Project.prototype, "fixBugInProduction", null);
const project = new Project();
project.fixBugInProduction();
function logDecoratorInternals1(target, propertyKey, descriptor) {
    console.log('target: ');
    console.log(target);
    console.log('propertyKey: ');
    console.log(propertyKey);
    console.log('descriptor: ');
    console.log(descriptor);
}
function logDecoratorInternals2(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log('what is this???');
        console.log(this);
        originalMethod.apply(this, args);
    };
}
