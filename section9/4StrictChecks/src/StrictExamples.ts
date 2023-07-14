export class StrictExamples {

    // @ts-expect-error
    private shouldBeInitialized: string
    private canBeUndefined: string | undefined

    // @ts-expect-error // no implicit any
    private shouldHaveAType;

    private invokeThis(){
        // @ts-expect-error // we should call this.shouldBeInitialized
        console.log(shouldBeInitialized)
    }

    private printUndefined(){
        // @ts-expect-error - canBeUndefined possibly undefined, happens all the time
        canBeUndefined.length
    }

    private print(arg: string){
        // arg is not used, if "noUnusedParameters": true , we will have a compilation error
    }

    private catchError() {
        try {
            
        } catch (err) {
            // @ts-expect-error
            console.log(err.message)
        }
    }

}