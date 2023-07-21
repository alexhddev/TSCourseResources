"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class Project {
    constructor() {
        this.budget = 900;
    }
    addToBudget(amount) {
        this.budget = this.budget + amount;
    }
    writeTests() {
        console.log('Tests are important!!!');
    }
    fixBugInProduction() {
        console.log('Fixing bug in production .... :(((');
    }
}
__decorate([
    __param(0, logParamDec)
], Project.prototype, "addToBudget", null);
const project = new Project();
project.addToBudget(300);
project.addToBudget(300);
function report(target, propertyKey, parameterIndex) {
    console.log(`${propertyKey} was called with param at index ${parameterIndex}`);
}
function logParamDec(target, propertyKey, parameterIndex) {
    console.log('target:');
    console.log(target);
    console.log('propertyKey:');
    console.log(propertyKey);
    console.log('parameterIndex:');
    console.log(parameterIndex);
}
