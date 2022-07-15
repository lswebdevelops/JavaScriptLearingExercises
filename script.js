// let realName = prompt("What is the \"official\" name of JavaScript?");


// if(realName == "ECMAScript"){
//   document.getElementById("p1").innerHTML = "Right!";
// }else{
//   document.getElementById("p1").innerHTML = "You don't know ECMAScript?!";
    
// }

let realName = prompt("What is the \"official\" name of JavaScript?");

let message =
(realName == "ECMAScript")? "Right!":
"You don't know ECMAScript?!";

document.getElementById("p1").innerHTML = message;