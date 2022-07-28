
const selectors = document.querySelectorAll('p.example, div.example2, span.example');

for(i = 0; i <selectors.length; i ++){
    selectors[i].style.backgroundColor = 'yellow';
    selectors[i].style.color = 'firebrick';
    selectors[i].style.borderRadius = "25px 32px 23px 43px";
  


}

const hOnes = document.querySelectorAll('h1, h2');
console.log(hOnes.length)
for(j=0; j < hOnes.length; j++){
    hOnes[j].style.color = 'red';

    hOnes[j].style.textShadow = "5px 5px 1px #333, 5px 5px 1px grey";

}

const pIs = document.querySelectorAll('p');
console.log(pIs.length)
for(k=0; k < pIs.length; k++){
    pIs[k].style.color = 'lightgreen';

    pIs[k].style.textShadow = "5px 5px 1px blue, 5px 5px 1px green";

}
