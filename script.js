let count = 0;

function cc(card) {
  // Only change code below this line

 let result = "";

switch(card){
 
case 2:
 case 3:
 case 4:
case 5:
case 6:
count ++;
break;

case 10:
case 'J':
case 'Q':
case 'K':
case 'A':
count --;
break;
}

if(count > 0){
result = `${count} Bet`;
}else{
  result = `${count} Hold`;
}
  return result;
  // Only change code above this line
}


//  cc(3); cc(7); cc('K'); cc('A');

document.querySelector('#p1').innerHTML = cc('Q');