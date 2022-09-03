// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = salaries.John + salaries.Ann + salaries.Pete;

function printSalary(obj){
  for(let key in obj){
      return sum;
  }
       return 0;
}



console.log(printSalary(salaries));
console.log(salaries);

delete salaries.John;
delete salaries.Ann;
delete salaries.Pete;
console.log("after object empty:");
console.log(salaries);
console.log(printSalary(salaries));