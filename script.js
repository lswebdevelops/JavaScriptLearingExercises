// Write a function called add7 that takes one number and returns that number + 7.


// function add7(a){
//     return a +7;
// }
// alert(add7(5))

// now ass an arrow function>
// let add7  = (a) => a + 7;

// alert(add7(5))

// Write a function called multiply that takes 2 numbers and returns their product.

// let multiply = (a,b) => a * b;
// alert(multiply(3,3))


/* Write a function called capitalize that takes a string and
 returns that string with only the first letter capitalized.
 Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.*/

//  function capitalize(){
//   let sentence = prompt("Please type a beautiful phrase");
//   console.log(sentence.slice(0,1).toUpperCase() + sentence.slice(1,).toLocaleLowerCase());
//  }
//  capitalize();
 
// let sentence = prompt("give me a phrase and I will show you some magic!");
// // the same in an arrow function .
// let capitalize = () => sentence;
// console.log(sentence.slice(0,1).toUpperCase() + sentence.slice(1,).toLocaleLowerCase());

// capitalize();

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(){
    let sentence = prompt("Type a phrase, please.");
    console.log(sentence.slice(-1));
}
lastLetter();