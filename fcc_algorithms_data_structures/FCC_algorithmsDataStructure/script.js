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
arr.splice(1, 4);

// Only change code above this line
console.log(arr); //[2, 5, 2, 1] = 10 (sum)

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
const letters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);

console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const startIndexLetters = 12;
const amountToDeleteLetters = 100;
letters.splice(startIndexLetters, amountToDeleteLetters);
console.log(letters); // (12) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

letters.splice(
  12,
  0,
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
);
console.log(letters); // (26) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//   Copy Array Items Using slice()

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(weatherConditions);
console.log(todaysWeather);

let fCast = ["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"];
function forecast(arr) {
  // Only change code below this line
  arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(forecast(fCast));

// */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
// Copy an Array with the Spread Operator

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
let myArray = thisArray;
console.log(typeof thatArray); //object
console.log(typeof myArray); //object

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    let obj = [...arr];
    newArr.push(obj);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 5));

// /Combine Arrays with the Spread Operator
let thisArray33 = ["sage", "rosemary", "parsley", "thyme"];

let thatArray33 = ["basil", "cilantro", ...thisArray33, "coriander"];
console.log(thisArray33);
console.log(thatArray33); // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

console.clear();
//   function spreadOut() {
let fragment = ["to", "code"];
let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line

let sentence2 = ["learning", "to", "code", "is", "fun"];

console.log(sentence, sentence2);
console.log(sentence === sentence2); // false

// return sentence;
//   }

//   console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
// indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists).
console.log(fruits.indexOf("dates")); // -1
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("pears"));

fruits[5] = "bananas";
console.log(fruits.indexOf("bananas"));
console.log(fruits); // (6) ['apples', 'pears', 'oranges', 'peaches', 'pears', 'bananas']

function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) != -1;
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

console.clear();

function greaterThanTen(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > elem) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr); // 12, 14, 80
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1], 10);

//// *///////////////

fruits = ["apples", "pears", "oranges", "peaches", "pears"];
console.log(fruits.indexOf("grapes")); // -1
fruits.push("grapes");
console.log(fruits); //  ['apples', 'pears', 'oranges', 'peaches', 'pears', 'grapes']
console.log(fruits.indexOf("grapes")); // 5
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("pears"));
console.log(fruits.indexOf("peaches"));

function quickCheck2(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) == "-1") {
    return false;
  } else {
    return true;
  }
}
// Only change code above this line

console.log(quickCheck2(["squash", "onions", "shallots"], "mushrooms"));

// Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]); //  [12, 14, 80]

function lessThanTen(arr) {
  let newArr = [];
  for (let i =0; i < arr.length; i++) {
    if(arr[i] < 10) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}

lessThanTen([2, 12, 8, 14, 80, 0, 1]); // [2, 8, 0, 1]


console.clear();


function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i= 0; i <arr.length; i ++){
    if(arr[i].indexOf(elem) == -1){     
      newArr.push(arr[i]);    
  }
}
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2)); // []
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)) // [ [ 10, 8, 3 ], [ 14, 6, 23 ] ];
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));// [ [ 'flutes', 4 ] ]
console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")); // [ [ 'amy', 'beth', 'sam' ] ]
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // []
