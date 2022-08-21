// // examin the document object//
 console.dir(document);

// console.log(document.domain);
// console.log(document.documentURI);
// console.log(document.title);
// document.title = "test"
// console.log(document.body);

// console.log(document.all[13].id);
// let changeText = document.all[13];
// console.log(changeText);

// changeText.textContent = "test2"
// console.log(document.all[13]);
// console.log(document.images[0]['alt']);
//selectors. 


//getElementById

console.log(document.getElementById('test'));
let divId = document.getElementById('test');
console.log(divId.textContent)
divId.innerHTML = '<h2>Hello</h2>'
divId.style.color = "yellow"
divId.style.border = "solid yellow 1px"
divId.style.width = "60px"
divId.style.height = "5px"



let body = document.getElementById('body');
console.log(body);
body.style.backgroundColor= '#333';










