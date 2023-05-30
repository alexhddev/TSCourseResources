export {}

const scrumRole = {
    holdsMeetings: false,
    teams: ['Team1', 'team2']
}

const productOwnerRole = {
    holdsMeetings: true,
    reportsTo: 'upperManagement'
}

function mergeRoles<T extends object, G extends object>(role1: T, role2: G): T & G{
    return {...role1, ...role2}
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
console.log(scrumProductOwnerRole)