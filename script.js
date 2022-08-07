const ourArray =[]
let i = 0;
while(i <= 5){

  ourArray.push(i);
  i++;
}

console.log(ourArray)


// Setup
const myArray = [];

// Only change code below this line
let j = 5;

while ( j >= 0){
  myArray.push(j)
  j--;
}

console.log(myArray)

 const forArray= [];
for( let i = 0; i <= 5; i ++){
  forArray.push(i)
}
console.log(forArray)


// Setup
const myOddArray = [];

// Only change code below this line
// just odd numbers to an array using for loop
for ( let i = 1; i <= 9; i = i +2){
  myOddArray.push(i)
}

console.log(myOddArray)

// descending odd numbers> 
// Setup

const myOdd2Array = [];

// Only change code below this line

for ( let i = 9; i >= 1; i -= 2){
  myOdd2Array.push(i)
  
}
 console.log(myOdd2Array)

 const arr = [10, 9, 8, 7, 6];



for (let i = 5;i >=0; i--){
  arr.push(i);
  

}
// console.log(arr)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

}



// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;

for (i = 0; i< myArr.length; i ++){
total += myArr[i]
}
console.log(total)




const arr2 = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i])
  for (let j = 0; j < arr2[i].length; j++) {
    // console.log(arr2[i][j]);
  }
}


console.clear();


// /*/*/*/*/*/*/*/*/*/*//*/*/*

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for(let i = 0;  i < arr.length; i ++){
    // console.log(multiplyAll[i])
    for(let j = 0; j < arr[i].length; j ++){
      product *= (arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]))

