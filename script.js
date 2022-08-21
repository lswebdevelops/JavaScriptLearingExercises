

function validateForm(){

let x = document.getElementById('numb').value;

let text;
if(isNaN(x) || x < 1 || x > 999){
  text = "Input not valid"
}else{
  text= "Input OK"
}
document.getElementById('demo').innerText = text;


}

