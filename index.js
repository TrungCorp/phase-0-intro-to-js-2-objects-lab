// Write your solution in this file!
const employee = {
    name: 'Jack Takae',
    streetAddress: '329 Willow St'
}

function updateEmployeeWithKeyAndValue(employee,key,value)
{
    const copyArray = {...employee}
    copyArray[key] = value
    
    return copyArray
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
{
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee,key)
{
    const copyClone = {...employee}
    delete copyClone[key]
    return copyClone
}
function destructivelyDeleteFromEmployeeByKey(employee,key)
{
    delete employee[key]
    return employee
}