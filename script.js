// const myObj = {
//   prop1: "val1",
//   prop2: "val2"
// };

// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;


// document.querySelector('#p1').innerHTML =prop1val;
// document.querySelector('#p2').innerHTML =prop2val;


const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

document.querySelector('#p1').innerHTML = myObj["Space Name"];
document.querySelector('#p2').innerHTML = myObj['More Space'];
document.querySelector('#p3').innerHTML = myObj["NoSpace"];
document.querySelector('section').innerHTML = "🖖";




