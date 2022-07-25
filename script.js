const fruits = ["Banana", "Orange", "Apple"];

document.getElementById('demo').innerHTML = fruits;

function addNewFruit(){
fruits[fruits.length] = prompt("type a fruit");
document.getElementById("demo").innerHTML = fruits;

}