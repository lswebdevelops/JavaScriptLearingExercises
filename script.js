// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let obj = {};
// obj.name = "John";

// obj.surname = "Smith";
// obj.name = "Peter";

// delete obj.name;
// console.log(obj);


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:




let schedule = {};



console.log(schedule);

function isEmpty(obj){

for(let key in obj){
    return false;
}return true;

}

console.log("It is empty: " + isEmpty(schedule));// true
schedule["8:30"] = 'get up';
console.log("It is empty: " + isEmpty(schedule));// false

