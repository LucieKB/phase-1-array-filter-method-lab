const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching (drivers,names){
    return drivers.filter(
        (result) => result.toLowerCase() === names.toLowerCase()
        )
}

function fuzzyMatch(drivers,names){
    return drivers.filter(
       (result) => result.indexOf(names)===0 
    )
}

function matchName(object, string){
    return object.filter(
        (result) => result.name === string
    )
    }

