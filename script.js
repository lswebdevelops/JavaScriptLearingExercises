//mouse events and mouse moves
let button = document.getElementById('button');
let box = document.getElementById('box')
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent);// doble click
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)



box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseover', runEvent);



function runEvent(e){
    console.log('Event type: ' + e.type);
    box.style.background = 'black'
    box.style.color = 'white'

}
box.addEventListener('mouseleave', runEventoff);
// box.addEventListener('mouseout', runEventoff);



function runEventoff(e){
    console.log('Event type: ' + e.type);
    box.style.background = 'yellow'
    box.style.color = 'red'

}
