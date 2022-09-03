let person = {
    name:{

     first: "Davi",
     last: "Sardanha",
    },
};
 

person['name']['last']= 'Hellmann';
person.age = 1;
person['name']['first'] = 'Roberto'
person.age = 87;
person['eyes']= 'hazel'
person.farewell = function (){
    console.log('Bye everybody!');
}
console.log(person['eyes']);
console.log(person.farewell());;

let years = "";
function pluralYears(){
    if(person.age >1){
         years = 'years'
    }else{
        years = 'year'
    };
}
pluralYears()
console.log(years);
document.getElementById('p1').innerText = person['name']['first'] + 
" " + person['name']['last'] + " is " + person.age + " " + years +" old.";
console.log(person);