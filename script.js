let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
// console.log(itemInput);
itemInput.addEventListener('keydown', runEvent);

function runEvent(e){
console.log(e.target.value);
document.getElementById('output').innerHTML = "<h3>" + e.target.value+ "</h3>"

}