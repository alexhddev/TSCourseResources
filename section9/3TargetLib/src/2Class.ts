export class Manager {

    private name: string;
    private project: string;

    static COMPANY_NAME = 'Awesome inc';

    constructor(name: string, project: string) {
        this.name = name;
        this.project = project
    }

    public getName(){
        return this.name;
    }

    public setName(name: string){
        this.name = name
    }

    public getProject(){
        return this.project;
    }

    public setProject(project: string){
        this.project = project
    }
}