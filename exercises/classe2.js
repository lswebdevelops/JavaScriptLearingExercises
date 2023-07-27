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

const murderRobot = (name) =>{
    let state ={
        name, 
        speed:100,
        position: 0,
    }
    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state),
    )

}

murderRobot('sniffles').bark()
