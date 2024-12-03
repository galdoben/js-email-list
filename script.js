
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
const listEmail = document.getElementById('email-list');



for(let i=0; i<10; i++){
    axios.get(endPoint)
    .then(response =>{
        if (response.data.success === true){
            let email = `<li> ${response.data.response} </li>` 
            printList(email)
        }
    })
    
}




function printList (email){
 listEmail.innerHTML += email
}