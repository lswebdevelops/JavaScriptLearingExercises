

// function createPerson(name){
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function (){
//         console.log(`Hi! I'm ${this.name}.`);
//     }
//     console.log(obj);
//        return obj;
// }


// const salva= createPerson('Salva');

// salva.name;
// salva.introduceSelf();

// const frankie= createPerson('Fraunkie');
// frankie.name;
// frankie.introduceSelf();
 
// constructors> the same as above


function Person(name){
				   
    this.name = name;
    this.introduceSelf= function(){
        console.log(`Hi! I'm ${this.name}.`);
    }
					 
				  
}

//console.log(To call Person() as a constructor, we use new:

const salva= new Person('Salva');

salva.name;
salva.introduceSelf();

const frankie= new Person('Frankie');
frankie.name;
frankie.introduceSelf();