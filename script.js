const dogs = [
    {name:'Snickers', age:2},
    {name:'Hugo', age:8},   
    {name:'Vandy', age:16},
    {name:'Billy', age:10}

                ];

function makeGreen(){
    const p = document.querySelector("p");
    p.style.color ='green';
    p.style.fontSize ='50px';
}

//relular
console.log("hello");
// Interpolate
console.log('hi I am a %s string', '⌚');

//styled
console.log('%c I am some great text', 'font-size:20px; background:red; text-shadow: 10px 10px 0 blue');

//warning

console.warn('oh noooo!');
//info
console.info('oh noooo! The croks are eating people');

//testing

console.assert(1===2, 'you did not select the right Element');

let p = document.querySelector('p');
console.assert(p.classList.contains('_ouch'), 'That is wrong');

//clearing
console.clear();
//viewing DOM elements

// console.log(p);
console.dir(p);
console.log(dogs)
console.dir(dogs)
console.clear();

//grouping togheter

dogs.forEach(dog =>{
    // console.group('${dog.name}');
    console.groupCollapsed(`${dog.name}`);

    console.log(`This is  ${dog.name}`);
    console.log(`${dog.name} is  ${dog.age} years old`);
    console.log(`${dog.name} is  ${dog.age * 7} dog-years old`);
    console.groupEnd(`${dog.name}`);

});
//count

console.count('wes');
console.count('wes');

console.count('wes');

console.count('wes');

console.count('wes');

// console.clear();

//timing

console.time('taking data');
fetch('https://api.github.com/users/lswebdevelops')
.then(data => data.json())
    .then(data =>{
        console.timeEnd('taking data');
        console.log(data);
    
});
// console.clear();

console.table(dogs);