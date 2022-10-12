const cat = {
    init: function(sound){
        this.sound = sound
        return this
    },
    makeSound: function(){
        console.log(this.sound);
    }
}

const mark = Object.create(cat)
mark.init("mewkjwn!")
// or const mark = Object.create(cat).init("mewkjwn!")
mark.makeSound();

const waffles = Object.create(cat)
waffles.init('sdajflkjlknkl22k2nlk')
// or > const waffles = Object.create(cat).init('sdajflkjlknkl22k2nlk')
waffles.makeSound();

console.log('Is mark a cat?',
cat.isPrototypeOf(mark));


