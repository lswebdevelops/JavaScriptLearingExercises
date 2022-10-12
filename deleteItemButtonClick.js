const ul = document.querySelector('.hr');

//Creating delete button
function createDeleteButton() {
  const delButton = document.createElement("button");
  delButton.classList.add("delete");
  delButton.type = 'button';
  delButton.appendChild(document.createTextNode("Delete"));
  return delButton;
}

//Creating read button
function createReadButton() {
    const delButton = document.createElement("button");
    delButton.classList.add("read");
    delButton.type = 'button';
    delButton.appendChild(document.createTextNode("Read"));
    return delButton;
  }



// event listener that removes list element when button is clicked
function deleteListElement(event) {
  const {
    target: btn
  } = event; // get the target property from the event object as a local variable btn
  if (btn.matches('button.delete')) {
    btn.closest('p').removeChild(btn.parentElement);
  }
}

ul.addEventListener('click', deleteListElement);

document.getElementById('addListElement').addEventListener('click', function() {
  const li = document.createElement('stan');
  // adding a book name
  const para = document.createElement('p');
  para.textContent = "The hobbit"
  // adding an author
  const para2 = document.createElement('p');
  para2.textContent ="Writer Name"
    // adding pages
    const pages = document.createElement('p');
  pages.textContent = 333
  const div = document.createElement('div')
  const btn = createDeleteButton();
  const read = createReadButton();
  div.appendChild(li);
  div.appendChild(para)
  div.appendChild(para2)
  div.appendChild(pages)
  div.appendChild(btn);
  div.appendChild(read);
  ul.appendChild(div);
  
})




