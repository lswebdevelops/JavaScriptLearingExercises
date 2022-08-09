

let a = prompt("give me a number", 3);
let b = prompt("give me a number", 5);

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}




function findGreaters(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}



console.log(findGreater(a,b))

console.log(findGreaters(a,b))



// */************* */


function checkEqual(a, b) {
  return a === b? "Equal": "Not Equal"
  }
  
 console.log( checkEqual(1, 2))