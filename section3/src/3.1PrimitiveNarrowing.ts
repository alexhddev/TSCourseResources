// narrow down primitives: with typeof

function getNumberValue(arg: unknown): number{
    if (typeof arg === 'number') {
        return arg;
    }
    if (typeof arg === 'string') {
        return Number(arg)
    }
    throw new Error(`Unsupported format: ${JSON.stringify(arg)}`);    
}

console.log(getNumberValue('dfg'));
getNumberValue({})