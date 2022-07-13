let userName =  window.prompt("Type your User name:");

if(userName == "Admin"){

    let adminPassword = window.prompt("Type a password");

    if(adminPassword == "TheMaster"){
        alert("Welcome my Master!");
    }else if(adminPassword === null){
        alert("Canceled");
    }else 
    {alert("Wrong Password. Try regreshing the page (F5)");}



}
else if(userName == null){
 alert("Canceled")
}

else{
    alert("I don't know you")
   }



