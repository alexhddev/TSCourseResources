export { }

class Project {

    constructor(public name: string, public budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

}

const coolProject = new Project('CoolProject', 10000);
coolProject.name = 'UpdatedName'
coolProject.printBudget();