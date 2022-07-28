const contacts = [
    'Luciano:2232322:Indaial', 
    'Davi:3453456:Indaial', 
    'Adiles:7654322:Indaial', 
    'Beto:9998769:Salete', 
    'Daiana:9384975:Blumenau', 
    'Renato:32278020:Salete'
    ];

    const para = document.querySelector('p');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

        btn.addEventListener('click', () => {

        const searchName = input.value.toLowerCase();
    // input.value= "";
    //after searching for a name the cursor returns to the input field with 'focus'
    input.focus();
    para.textContent = '';

    for(const contact of contacts){
        const splitContact = contact.split(':');
        
        if(splitContact[0].toLowerCase()=== searchName){
            para.textContent =
             splitContact[0] + '\'s number is ' 
            + splitContact[1]+ " and he/she lives in "
             + splitContact[2] + ".";
            break;
        }

    }
    if(para.textContent === ""){
        para.textContent = "Contact not found. Please be a doll and take it seriously!";
    }
});



