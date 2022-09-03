// // // let people = {};

// // // people['name']="Luciano";
// // // people['age'] =36;
// // // // console.log(people);
// // // delete people['name']
// // // // console.log(people);

// // // people['name']= 'Davi';

// // // // console.log(people);
// // // people['age'] = 1;
// // // people['city of birth'] = "Indaial";
// // // people['school'] = "Bom Pastor";
// // // people['name of mother']= 'Adiles';
// // // people['family name']= "Sardanha"

// // // // console.log(people);
// // // // deleting items in an object
// // // // for( let i in people){
// // // //     console.log([i] + ": " + people[i]);
// // // // delete people[i];

// // // // }
// // // // console.log("After deleted:");
// // // // console.log(people);

// // // people["likes dogs"] = true;
// // // // console.log(people);
// // // // console.log(people['likes dogs']);

// // // let key = 'likes kiwis';

// // // // user[key]= true;

// // // // console.log(people['name']);
// // // console.log(people);
// // // people[key]= true;
// // // console.log(people);
// // // let question2 = prompt('what is your name? ', 'name')
// // // let   question  = prompt(`What do you want to know about the user named: ${people['name']}? name\
// // // ,family name, age city of birth,school, name of mother,likes dogs? `, 'family name');
// // // document.getElementById('p1').innerText = people[question];
// // // document.getElementById('p2').innerText = people[question2];



// // // let fruit = 'apple';
// // // let bag= {
// // //     [fruit]: 5
// // // };
// // // console.log(bag.apple);//5
// // // same as:
// // // let fruit = 'apple';
// // // let bag = {};

// // // bag[fruit] = 5;
// // // // console.log(bag.apple);

// // // let fruit = 'apple';
// // // let bag = {
// // //   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// // // };
// // // console.log(bag);
// // // console.log(bag.appleComputers);


// // // let name= 'Davi';
// // // let people = {
// // //     [name+ "sname"]: "Davi"
// // // };
// // // console.log(people);
// // // console.log(people.Davisname);

// // // function makeUser (name, age){
// // //     return{
// // //         name: name, // on just name
// // //         age: age, // just age also works 
// // //         //..other properties
// // //     };
// // // }

// // // let user = makeUser('John', 36);

// // // console.log(user.name, user.age);

// // function makeUser(name, age){
// //     return {
// //         name, 
// //         age,
// //     }
// // }

// // let user = {
// //     name, 
// //     age: 30
// // }
// // user.name = "Luciano";
// // console.log(user.name, user.age);

// // let obj = {
// //     for: 1,
// //      let: 2, 
// //     return: 3
// // };
// // console.log(obj.for + obj.let + obj.return);
// // console.log(obj);
// // console.log(obj['return']);

// // let obj2 = {
// //     0: "test"
// // }

// // console.log(obj2[0]);
// // console.log(obj2["0"]);

// //proto
// // let obj = {};
// // obj.test = 5;
// // console.log(obj.test);// 5

// // let obj2 ={};
// // obj2.__proto__ = 3;
// // console.log(obj2.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// // Check if an object has such / a property
// // let user = {};
// // console.log(user.noSuchProperty === undefined);

// // let object = {
// //     name: "Luciano", 
// //     age: 36,
// // }

// // console.log(("name" in object));
// // console.log('age' in object);
// // console.log('test' in object);

// // let obj = {
// //     test : undefined,
// //     age: 35, 
// //     name: "Luciano", 
// //     city: "Indaial", 
// //     isAdmin: true,

// // };

// // // console.log(obj.test);

// // // console.log("test" in obj);

// // for(let prop in obj){
// //     console.log(prop + ": " + obj[prop]);
// // }
// // //for arrays we user of and for objects we use in
// // let array =[ 23,355,3252,5252]
// // for (let key of array){
// //     console.log(key);
// // }

// // Number(...) explicitly converts to a number
// // Math.trunc is a built-in function that removes the decimal part
// console.log( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// console.log( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// console.log( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
// let user = {
//     name: "John", 
//     surname: "Smith", 
// };

// user.age = 24;
// console.log(user);
// for(let prop in user){
//     console.log(prop + ": "+ user[prop]);
// }


// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };

// for(let code in codes){
//     console.log(+code);
    
// }

// for(let code in codes){
//     console.log(code);
    
// }


// for(let code in codes){
//     console.log(-code);
    
// }

// console.clear();
// //now with "-"
// let codesMinus = {
//     "-49": "Germany",
//     "-41": "Switzerland",
//     "-44": "Great Britain",
//     // ..,
//     "-1": "USA"
// };
// for(let code in codesMinus){
//     console.log(-code);
    
// }
// for(let code in codesMinus){
//     console.log(code);
    
// }
// for(let code in codesMinus){
//     console.log(+code);
    
// }