class Project {

    name: string;
    budget: number;

    constructor(name: string, budget: number){
        this.name = name;
        this.budget = budget;
    }

    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

}

const coolProject = new Project('CoolProject', 10000);
coolProject.printBudget();