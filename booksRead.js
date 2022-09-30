function Books(title,autor,  pages, read){
    this.title = title
    this.autor = autor
    this.pages = pages
    this.read = read
    this.printInfo = function(){
        console.log(`${title} by ${autor}, ${pages} page. Is it read?: ${read}.`)
    }
    
}


const book1 = new Books("The Hobbit", "who actually wrote it", "Probably more than one",true);
const book2 = new Books("The Boss", "who actually wrote it", "Probably more than one",false);
const book3 = new Books("The Boys", "who actually wrote it", "Probably more than one",false);

book1.printInfo();
book2.printInfo();
book3.printInfo();

