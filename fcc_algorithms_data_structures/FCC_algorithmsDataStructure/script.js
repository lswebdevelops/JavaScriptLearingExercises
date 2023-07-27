let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

console.log(complexArray[0][0].one);
// Array.push() and Array.unshift().
console.clear();

let twentyThree = "XXIII";
console.log(twentyThree);
let romanNumerals = ["XXI", "XXII"];
console.log(romanNumerals);
romanNumerals.unshift("XIX", "XX");
console.log(romanNumerals);

let numbersOnetoSix = [1, 2, 3, 4, 5, 6];
console.log(numbersOnetoSix); //[1, 2, 3, 4, 5, 6]

numbersOnetoSix.push(7);
console.log(numbersOnetoSix); //  [1, 2, 3, 4, 5, 6, 7]
numbersOnetoSix.unshift(0);
let numbersZerotoSeven = numbersOnetoSix;
console.log(numbersZerotoSeven); //[0, 1, 2, 3, 4, 5, 6, 7]

numbersOnetoSix.shift(); //
console.log(numbersOnetoSix); //[1, 2, 3, 4, 5, 6, 7]

console.clear();

function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

// Remove Items from an Array with pop() and shift()

let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
console.log(greetings);
greetings.shift();

console.log(greetings);

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove Items Using splice()

let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);
console.log(array);


let array3 = ["I", "am", "feeling", "really", "happy"];

let newArray = array3.splice(2, 1);
console.log(array3); // ['I', 'am', 'really', 'happy']
console.log(newArray); // feeling


const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4)

// Only change code above this line
console.log(arr);//[2, 5, 2, 1] = 10 (sum)


console.clear();

// Add Items Using splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
// startIndex > where to start deleting: 12, 
// amountToDelete> just one.> 12 

// 13 and 14 are added. 
const letters = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));

console.log(letters)// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 const startIndexLetters = 12
 const amountToDeleteLetters = 100;
 letters.splice(startIndexLetters, amountToDeleteLetters)
 console.log(letters); // (12) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

 letters.splice(12, 0,'m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
 console.log(letters);// (26) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


 function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0,2, 'DarkSalmon','BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  
  
  
  //   Copy Array Items Using slice()
  
  
  let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
  
  let todaysWeather = weatherConditions.slice(1,3);
  console.log(weatherConditions);
  console.log(todaysWeather);
  
  console.clear();

let fCast = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
 function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4)
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(fCast));