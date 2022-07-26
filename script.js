const contacts = ['Luciano:99655324', 'Adiles:96532324', 'Daiana:93922423', 'Renato:9998769', 'Davi:9384975'];

const param = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{

  const searchName = input.value.toLowerCase();

  input.value = "";
  input.focus();

  param.textContent= "";
  for(const contact of contacts){
    const splitContact = contact.split(":");
    if(splitContact[0].toLowerCase() === searchName){
      param.textContent = splitContact[0] + '\'s number is ' + splitContact[1] +
      ".";
      break;
    }

  }
if(param.textContent === ''){
  param.textContent = 'Contact not found.';
}

})

