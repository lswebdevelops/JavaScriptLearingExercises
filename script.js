// transversing the DOM

  let itemList = document.querySelector('#items')
//   console.log(itemList);
//   console.log(itemList['parentNode']);
//   console.log(itemList.parentNode);// or.... 

//itemList.parentNode.parentNode.parentNode.style.backgroundColor= "#333"// now the body has the background.

// itemList.parentNode.parentNode.style.backgroundColor= "#f4f4f4"// body

// console.log(itemList.parentNode.parentNode.parentNode)// html

// childNodes >> should not be used, because when you have breaks between items (like <li></li>'enter' li></li> it
// will create a textNode in between see below:)
console.log(itemList.childNodes);
// ex: 
// 0: text
// 1: li.list-group-item
// 2: text
// 3: li.list-group-item
// 4: text
// instead, use children: 
console.log(itemList.children)

// 0: li.list-group-item
// 1: li.list-group-item
// 2: li.list-group-item
// 3: li.list-group-item
// 4: li.list-group-item

console.log(itemList.children[1])

itemList.children[2].style.color = "blue";
itemList.childNodes[3].style.color = "red"; // should not be used.
//first Child

// console.log(itemList.firstChild);// do not use either
console.log(itemList.firstElementChild)// use this instead
itemList.firstElementChild.textContent = 'firstElementChild';
itemList.firstElementChild.style.backgroundColor = '#333'
itemList.firstElementChild.style.color = 'white'

//last element child
itemList.lastElementChild.style.color = 'firebrick'


//next Sibling

itemList.nextElementSibling.style.color = "red"
// previousElementSibling
itemList.previousElementSibling.style.border = "blue solid 1px"



