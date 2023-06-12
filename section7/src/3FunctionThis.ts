// @ts-ignore
// console.log(global)

this.fromGlobalContext = 'fromGlobalContext'

const context = () => {

    function printThisFunction() {
        // @ts-ignore
        console.log(this)
    }

    const printThisArrowFunction = () => {
        // @ts-ignore
        console.log(this)
    }

    const foo = 'bar'

    // @ts-ignore
    return {
        printThisFunction,
        printThisArrowFunction,
        foo
    };

}

context().printThisFunction()
console.log('----------')
context().printThisArrowFunction()