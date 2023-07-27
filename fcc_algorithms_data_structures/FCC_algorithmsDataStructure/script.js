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

console.clear();

let array3 = ["I", "am", "feeling", "really", "happy"];

let newArray = array3.splice(2, 1);
console.log(array3); // ['I', 'am', 'really', 'happy']
console.log(newArray); // feeling


const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4)

// Only change code above this line
console.log(arr);//[2, 5, 2, 1] = 10 (sum)

