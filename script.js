// // create elements

// // create a div

// var newDiv = document.createElement('div');
// // console.log(newDiv);
// //add class
// newDiv.className = "hello"
// // console.log(newDiv.className);
// //add id
// newDiv.id = "hello";
// //add attribite
// newDiv.setAttribute('title', "Hello Div");


// let newDivText = document.createTextNode('Hello World!');

// //add text to div
// newDiv.appendChild(newDivText)
// console.log(newDiv);
// //now adding it to the DOM

// let hearderContainer = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// hearderContainer.insertBefore(newDiv, h1)
// hearderContainer.style.backgroundColor = "#f4f4f4"
// hearderContainer.style.color = 'blue'
// hearderContainer.style.border = 'blue solid 1px'
// hearderContainer.style.textAlign = 'center';

// adding eventListeners

// //old way
// <button class="btn btn-dark" id="button" 
// onclick="buttonClick(1)">Click Here</button>
// function buttonClick(){
//     console.log('button clicked');
// }


// /new way/ ideal way
//using a named function
let button = document.getElementById('button').addEventListener('click', buttonClick)
// function buttonClick(){
//         console.log('button clicked');
//     }

    //now using the DOM

function buttonClick(){
        // console.log('button clicked');
    document.getElementById('header-title').textContent = "changed";
    document.querySelector('#main').style.background= '#827e7e';
    }


