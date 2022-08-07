const someAdjective = "smart";
let myStr = "Learning to code is ";
myStr += someAdjective;

document.querySelector("#p1").innerHTML = someAdjective;
document.querySelector("#p2").innerHTML = myStr;

// Change code below this line
console.log(myStr.length)
console.log("Learning to code is ".length)

let lastLetterOfAdj = someAdjective[someAdjective.length -1]
console.log(lastLetterOfAdj)

let secondlastLetterOfAdj = "";
console.log( secondlastLetterOfAdj = someAdjective[someAdjective.length -2])