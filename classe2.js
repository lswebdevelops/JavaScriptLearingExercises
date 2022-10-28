// Robot

//     .drive()

//         MurderRobot
//         .kill()

//         cleaningRobot
//         .clean()

// Animal

//     .poop()

//         Dog
//         .bark()

//         cat
//         .meow()

const barker = (state)=>({
    bark: ()=> console.log('Woof, I am ' + state.name),
})

const driver = (state) => ({
    drive: ()=> state.position = state.position + state.speed
})

barker({name: 'karo'}).bark()
