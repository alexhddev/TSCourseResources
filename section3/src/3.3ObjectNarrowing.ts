// narrow down objects
type Founder = {
    name: 'John Founder',
    car: 'Audi'
} | {
    name: 'Bill Bicycle',
    bike: 'Wheels'
}

function meetTheFounder(founder: Founder){
    console.log(`Meet your fonder ${founder.name}`)
    if (founder.name === 'John Founder') {
        console.log(`I drive a ${founder.car}`)
    }
    if (founder.name === 'Bill Bicycle') {
        console.log(`I don't drive so I use my bike called ${founder.bike}`)
    }
}

meetTheFounder({
    name: 'John Founder',
    car: 'Audi'
})

meetTheFounder({
    name: 'Bill Bicycle',
    bike: 'Wheels'
})





