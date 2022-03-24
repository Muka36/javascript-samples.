function gertuserrole(name, role, percentage) {

    switch(role) {
        case "admin":
            return `${name} is admin of all access ${percentage}`

        case "sub-admin":
            return`${name} is the sub-admin ${percentage}`
        case "testrep":
            return `${name} is the test rep ${percentage}`
        default:
            return `${name} is just a normal user ${percentage}`        
    }
}

console.log(gertuserrole("karthick", "admin", "100"));