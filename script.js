// create elements

// create a div

var newDiv = document.createElement('div');
// console.log(newDiv);
//add class
newDiv.className = "hello"
// console.log(newDiv.className);
//add id
newDiv.id = "hello";
//add attribite
newDiv.setAttribute('title', "Hello Div");


let newDivText = document.createTextNode('Hello World!');

//add text to div
newDiv.appendChild(newDivText)
console.log(newDiv);
//now adding it to the DOM

let hearderContainer = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
hearderContainer.insertBefore(newDiv, h1)
hearderContainer.style.backgroundColor = "#f4f4f4"
hearderContainer.style.color = 'blue'
hearderContainer.style.border = 'blue solid 1px'
hearderContainer.style.textAlign = 'center';


