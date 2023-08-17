import { toUpperCase } from "./Utils";


class Main {

    public async start(){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const upperCase1 = await toUpperCase('upperCase1')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const otherExample = await toUpperCase('otherExample')
        console.log('End of execution')
    }
}

new Main().start();