//mouse events and mouse moves
let button = document.getElementById('button');
let box = document.getElementById('box')
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent);// doble click
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)



// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseover', runEvent);
box.addEventListener('mousemove', runEvent);



function runEvent(e){
    console.log('Event type: ' + e.type);
    let r = e.offsetX 
    let g = e.offsetY
    let b = (e.offsetX + e.offsetY) /2;
    // box.style.background = 'black'
    // box.style.color = 'white'
output.innerHTML = '<h3>Mousex: '+e.offsetX+'</h3><h3>MouseY: '+ e.offsetY+'</h3>';
box.style.backgroundColor= "rgb("+r+","+g+","+b+")";
//box.style.backgroundColor= "rgb("+e.offsetX +","+e.offsetY+","+b+")"; // could be also like that

console.log(r);
console.log(g);
console.log(b);
}
// box.addEventListener('mouseleave', runEventoff);
// box.addEventListener('mouseout', runEventoff);



// function runEventoff(e){
//     console.log('Event type: ' + e.type);
//     box.style.background = 'yellow'
//     box.style.color = 'red'

// }

