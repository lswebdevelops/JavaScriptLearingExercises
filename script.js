let age = prompt("age", 18);

let message = (age < 3)? "hi, Baby!":
(age <18)?"Hello!":
(age <100)? "Greetings!":
"What an unusual age!";

document.getElementById("p1").innerHTML = message;
