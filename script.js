
const cars = ["corsa", 'clio', 'omega'];




let myFavoriteCars = "Those were once my cars: ";

for (let i=0; i < cars.length; i++){

  if(i === cars.length -1){

    myFavoriteCars += `and ${cars[i]}.`;

  }else{
myFavoriteCars += `${cars[i]}, `
  }

}

document.getElementById('p').innerHTML = myFavoriteCars;
