let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);

document.body.insertBefore(paragraphs[2], paragraphs[0]);
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);

