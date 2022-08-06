function testObj(obj, checkProp){


  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
return "Not found";
}



const myObj = {
  top: "hat",
  bottom: "pants"
};

 document.querySelector('#p3').innerHTML = testObj(myObj , 'bottom');






