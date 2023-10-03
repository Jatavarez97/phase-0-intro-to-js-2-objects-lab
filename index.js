// Write your solution in this file!
const employee = {
name: "Jackie",
streetAddress:"132 city st."

}
console.log (employee) 
function updateEmployeeWithKeyAndValue(employee, key, value1){
    const newObj = { ...employee}

    newObj[key] = value1;

return newObj

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value1){

employee[key]= value1;

return employee

}

function deleteFromEmployeeByKey(employee, key){

    const newObj= { ...employee}

    delete newObj[key]

return newObj

}

function destructivelyDeleteFromEmployeeByKey(employee, key){



delete employee[key]

return employee

}