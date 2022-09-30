// // creatinga constructor: 
// function Player(name, marker){
//     this.name = name
//     this.marker = marker
// };
// //calling the function using the new word:

// const player = new Player('steve', 'X')
// console.log(player.name) // 'steve'
// console.log(player.marker);


// const myPlayer = new Player("Luciano", 'P')
// console.log(myPlayer.name);
// console.log(myPlayer.marker);

// >> doing in a best way

function Player(name, marker){
    // says the name , marker of a particular user:
    this.name = name
    this.marker = marker
    this.sayName = function(){
        console.log(name);
    }
    this.sayMarker = function(){
        console.log(marker);
    }
}


const player1 = new Player('steve', "X");
const player2 = new Player('alse steve', "O");
player1.sayName();
player2.sayMarker();

