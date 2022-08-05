
function caseInSwitch(val) {

    let lowercaseLetter = val;
    switch (lowercaseLetter) {
        case "a":
            document.querySelector('#p2').innerHTML=   "A";
          break;
        case "b":
            document.querySelector('#p2').innerHTML=   "B";

          break;
          default:
            document.querySelector('#p2').innerHTML=   "no value provided";

      }
  }
  caseInSwitch("b");




  
  
  
 