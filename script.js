


const cats = ['Pete', 'Biggles', 'Jasmine'];
let myFavoriteCats = 'My cats are called ';
let i = 0;

do {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }
    i++;
}
while (i < cats.length);


const selectors = document.querySelectorAll('p');

for(let i= 0; i <= selectors.length; i ++){
    selectors[0].innerHTML = myFavoriteCats;
   selectors[1].innerHTML = myFavoriteCats;
   selectors[2].innerHTML = myFavoriteCats;
}






















