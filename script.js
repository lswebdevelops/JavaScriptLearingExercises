//html

const htmlContainer = document.querySelector('html');
  htmlContainer.style.backgroundColor = "#333"
htmlContainer.style.padding = "0"
//body
const bodyContainer = document.querySelector('body');
bodyContainer.style.backgroundColor = "rgb(155,155,155";
bodyContainer.style.padding = "96px 12pt 1in 2pc"


// your JavaScript file
const containerDiv = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious new text-content!';

containerDiv.appendChild(content);


// a <p> with red text that says “Hey I’m red!”



const contentPara = document.createElement('p');

contentPara.classList.add('contentPara');
contentPara.textContent= "Hey I’m red!";
containerDiv.appendChild(contentPara);
contentPara.style.color = "red";


// an <h3> with blue text that says “I’m a blue h3!”

const contentH3 = document.createElement('h3');

contentH3.classList.add('contentH3');
contentH3.textContent= "I'm a blue h3!";
containerDiv.appendChild(contentH3);
contentH3.style.color = "blue";

// a <div> with a black border and pink background color with the following elements inside of it:

const contentDiv = document.createElement('div');
contentDiv.classList.add('containerDiv2');
// contentDiv.textContent= "div2";
container.appendChild(contentDiv);
contentDiv.style.backgroundColor = "pink";
contentDiv.style.border = "solid black 1px";

// another <h1> that says “I’m in a div”
const containerDiv2 = document.querySelector('.containerDiv2');

const contentH1 = document.createElement('h1');

contentH1.classList.add('contentH1');
contentH1.textContent= "I’m in a div";
containerDiv2.appendChild(contentH1);

/* <p>  “ME TOO!”       <p></p> */
const contentP = document.createElement('p');

contentP.classList.add('contentP');
contentP.textContent= "Mee too";
containerDiv2.appendChild(contentP);

