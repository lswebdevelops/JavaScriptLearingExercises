//html

const htmlContainer = document.querySelector('html');
  htmlContainer.style.backgroundColor = "#333"
htmlContainer.style.padding = "0"
//body
const bodyContainer = document.querySelector('body');
bodyContainer.style.backgroundColor = "rgb(155,155,155";
bodyContainer.style.padding = "96px 12pt 1in 2pc"


// button
const btnContainer = document.querySelector("#btn");

btnContainer.style.width = "85px"
btnContainer.style.borderRadius = "5px"
btnContainer.style.border = "1px solid grey"
btnContainer.style.backgroundColor = "green"
btnContainer.style.height = "35px"

//adding functions the the btn
btnContainer.onclick = () => alert("Hello World!");

//btn2
// the JavaScript file
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});
btn2.style.backgroundColor = "green";
btn2.style.width = "85px"
btn2.style.height = "35px"
btn2.style.borderRadius = "5px"
btn2.style.border = "1px solid grey"

btn0.style.backgroundColor = "green";
btn0.style.width = "85px"
btn0.style.height = "35px"
btn0.style.borderRadius = "5px"
btn0.style.border = "1px solid grey"