// Only change code below this line
function countUp(startNum,endNum){
  
   if (endNum - startNum === 0 ) {
   return [startNum];
    
   } else {
     const countArray = countUp(startNum, endNum - 1);
     countArray.push(endNum);
     return countArray;
   }
 
 }
 // Only change code above this line
console.log(countUp(-10,10))

