const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["Me", "Adiles"]
};
ourDog.name = "Vandy";
ourDog["friends"] = ["Me","Adiles", "Davi"]

let yourDog = ourDog["legs"];

document.querySelector('#p1').innerHTML = `Your dog ${ourDog["name"]} has ${yourDog} legs` 
  + (document.querySelector('section').innerHTML) ;

document.querySelector('#p2').innerHTML = ourDog.friends[2]

 document.querySelector('#p3').innerHTML = ourDog.friends[1];






