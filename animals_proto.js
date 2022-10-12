// // let animal = {
// //     eats: true
// // }

// // console.log(animal);
// // let rabbit = {
// //     jumps: true
// // }
// // console.log(rabbit);
// // console.log(rabbit["jumps"]);//true
// // console.log(rabbit["eats"]); // undefined


// // rabbit.__proto__ = animal;
// // // after asigning __proto__ to rabbit it gets the eats property from animals.
// // console.log(rabbit["jumps"]);//true
// // console.log(rabbit["eats"]);//true


// let animal = {
//     eats: true, 
//     walk(){
//         console.log("Animal walk");
//     }

// };

// let rabbit = {
//     jumps: true, 
//     __proto__: animal
// };
// // walk is taken from the prototype

// // rabbit.walk();

// let longEar ={
//     earLength: 10, 
//     __proto__: rabbit,
// };
// // walk is taken from the protype chain 
// longEar.walk();// Animal walk
// console.log(longEar.jumps);
// let myAnimal = {
//     earSize: 23, 
//     // __proto__:animal,
//     __proto__: rabbit,
//     weight: 3
// }
// console.log(myAnimal.jumps);
// // this property is taken from rabbit, which takes it from animal
// console.log(myAnimal.eats);

// console.clear();


//  write/delete doesn't not affrect proto

let animal = {
    eats: true,
    walk(){
        /* this method won't be used by rabbit */
        console.log("test");
    }
};
let rabbit = {
    __proto__: animal,
};
rabbit.walk(); 

rabbit.walk = function(){
    console.log("Rabbit! Bounce-bounce!");
};
rabbit.walk(); 
animal.walk();

