let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
// console.log(itemInput);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);
itemInput.addEventListener('copy', runEvent);



function runEvent(e){
console.log("event type: " + e.type);
document.getElementById('output').innerHTML = "<h3>" + e.target.value+ "</h3>"

}

