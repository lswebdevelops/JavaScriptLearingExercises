const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits;
function addDivisor(){
  let test =prompt("what is the divisor? ", ", ");
  document.getElementById("demo2").innerHTML = fruits.join(test);
}

console.log(fruits)

