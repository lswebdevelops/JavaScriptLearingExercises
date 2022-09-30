'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button


let numberInput = []

// document.getElementsByClassName('.numbers div')
//   .addEventListener('click', function(event){
//     numberInput.push(event);
//   });

document.querySelectorAll('.numbers div').forEach(btn => {
  btn.addEventListener('click', (event) => {
      numberInput.push(parseInt(event.target.textContent));
  })

})



console.log(numberInput)

let resultDisplayed = false; // flag to keep an eye on what output is displayed