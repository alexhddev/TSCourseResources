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
    withBudget(10)
], Project.prototype, "writeTests", null);
__decorate([
    withBudget(500)
], Project.prototype, "fixBugInProduction", null);
const project = new Project();
project.fixBugInProduction();
project.fixBugInProduction();
function withBudget(budget) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...arg) {
            const instance = this;
            if (instance.budget > budget) {
                instance.budget = instance.budget - budget;
                originalMethod.apply(this, arg);
            }
            else {
                console.error(`Insufficient budget for ${propertyKey}. Required ${budget}, available ${instance.budget}`);
            }
        };
    };
}
