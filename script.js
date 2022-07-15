// // Get number corresponding to the current month, with 0 being January and 11 being December
// const month = new Date().getMonth();


function getMonth(){
const month = new Date().getMonth();
let monthStr = "";
if(month == 0){
  monthStr = "Jan";
  }

else if (month == 1){
  monthStr = "Fev";
  }

 else if(month == 2){
  monthStr = "Mar";
  }
else if (month == 3){
  monthStr = "Apr";
  }


else if  (month == 4){
  monthStr = "May";
  }
  
 else  if(month == 5){
  monthStr = "Jun";
  }
  else  if(month == 6){
    monthStr = "Jul";
    }
    else  if(month == 7){
      monthStr = "Aug";
      }
      else  if(month == 8){
        monthStr = "Sep";
        }
        else  if(month == 9){
          monthStr = "Oct";
          }
          else  if(month == 10){
            monthStr = "Nov";
            }
else{
  monthStr = "Dec"
}


switch (monthStr) {
	// January, February, March
	case "Jan":
	case "Fev":
	case "Mar":
		document.getElementById("p1").innerHTML = ("Winter");
		break;
	// April, May, June
	case "Apr":
	case "May":
	case "Jun":
    document.getElementById("p1").innerHTML = ("Spring");
		break;
	// July, August, September
	case "Jul":
	case "Aug":
	case "Sep":
    document.getElementById("p1").innerHTML = ("Summer");
		break;
	// October, November, December
	case "Oct":
	case "Nov":
	case "Dec":
    document.getElementById("p1").innerHTML = ("Autumn");
		break;
	default:
    document.getElementById("p1").innerHTML = ("Something went wrong.");
}
let dayOfMonth = new Date().getDate();

document.getElementById("p001").innerHTML = `It's `;
document.getElementById("p01").innerHTML = `.`;
document.getElementById("p2").innerHTML = ` It's ${monthStr}-${dayOfMonth}.`;

}




