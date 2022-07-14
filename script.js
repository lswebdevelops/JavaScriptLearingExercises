var num = prompt("Enter whole number");

while (num !== parseFloat(num).toString()) {
    alert("Please enter only numbers!");
    num = prompt("Enter number");
}

if (num > 2015){
   
document.getElementById("p1").innerHTML = "two late";
}

else if (num <2015){
  document.getElementById("p1").innerHTML = "two soon";
}

else{
  document.getElementById("p1").innerHTML = "exactly";
}


