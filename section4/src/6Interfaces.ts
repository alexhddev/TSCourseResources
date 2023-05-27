export {}

// interfaces: contract between code components

interface HrManager {
    getAllSalaries(): string[]
}

interface ScrumMaster {
    holdScrumMeeting(): void
}

class SwissArmyKnife implements HrManager, ScrumMaster{

    getAllSalaries(): string[] {
        return []
    }
    holdScrumMeeting(): void {
        console.log('Holding scrum meeting ... ')
    }
    
}

class Project {
    name: string;
    budget: number;
    scrumMaster: ScrumMaster

    constructor(name: string, budget: number, scrumMaster: ScrumMaster){
        this.name = name;
        this.budget = budget;
        this.scrumMaster = scrumMaster;
    }

    holdProjectMeeting(){
        this.scrumMaster.holdScrumMeeting();
    }
}

const superManager = new SwissArmyKnife();
const basicProject = new Project('Basic project', 100, superManager)

// TS vs other languages:
// Interfaces: cannot use instanceOf on TS interfaces, only on classes
// Constructors: TS doesn't support multiple constructors, it supports optional function parameters