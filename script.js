
const people = {
    name: {
        first:'Bob',
        last:'Smith',
    },
}

console.log(people.name.first);
console.log(people.name.last);
people.name.first = 'Davi'
people.name.last = 'Sardanha'

console.log(people.name.first);
console.log(people.name.last);
console.clear();

// person
const person = {
    name: ['Bob', 'Smith'],
    age: 32
  }
  const input = prompt('Get age?', 23)
person.age = input;


const input2 = prompt('Get name', "Davi");
person.name[0] = input2;

const input3 = prompt('Get surname','Sardanha');
person.name[1] = input3;

document.getElementById('p1').innerText = `${person.name[0]} ${person.name[1]} is ${person.age} year(s) old.`;