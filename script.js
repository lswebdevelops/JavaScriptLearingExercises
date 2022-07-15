// let realName = prompt("What is the \"official\" name of JavaScript?");


// if(realName == "ECMAScript"){
//   document.getElementById("p1").innerHTML = "Right!";
// }else{
//   document.getElementById("p1").innerHTML = "You don't know ECMAScript?!";
    
// }

// let realName = prompt("What is the \"official\" name of JavaScript?");

// let message =
// (realName == "ECMAScript")? "Right!":
// "You don't know ECMAScript?!";

// document.getElementById("p1").innerHTML = message;

let realName = prompt("What is the \"official\" name of JavaScript?", "ECMAScript");

switch(realName){
    case  "ECMAScript":
      document.getElementById("p1").innerHTML = "Right!";
    break;
    case "me":
      document.getElementById("p1").innerHTML = "You gotta be kitting me!";
    break;
 default:
  document.getElementById("p1").innerHTML = "You don't know ECMAScript? What a shame!";
}

