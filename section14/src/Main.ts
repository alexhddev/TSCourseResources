import { toUpperCase } from "./Utils";


class Main {

    public async start(){
        const upperCase1 = await toUpperCase('upperCase1')
        const otherExample = await toUpperCase('otherExample')
        console.log('End of execution')
    }
}

new Main().start();