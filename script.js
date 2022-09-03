// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

  function multiplyNumeric(menu){
      for(let key in menu){
          if(typeof(menu[key]) === 'number'){
           menu[key]*2;
                   }
  }
}
 console.log(multiplyNumeric(menu));

