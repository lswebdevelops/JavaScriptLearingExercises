//query selectorALl

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
let odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);

for(var i = 0; i<odd.length; i++){
    odd[i].style.background = '#ccc';

}


let even = document.querySelectorAll('li:nth-child(even)');
console.log(even);

for(var i = 0; i<odd.length; i++){
    even[i].style.background = '#f4f4f4';

}
