const cats = ['Pete', 'Biggles', 'Jasmine'];
 

let myCatsAreCalled = "My cats are called: ";


for (let i = 0; i <cats.length; i++){
    

    if(i === cats.length -1){
        myCatsAreCalled+= `and the last one is ${cats[i]}.`
    }else{
        myCatsAreCalled += `${cats[i]}, `;
    }
    
}

    document.querySelector('p').innerHTML = myCatsAreCalled;