//imports
import{url_Companies} from "../api/URL.js"


//Selecctores 
const formLogin= document.querySelector('#formLogin');
const email= document.querySelector('#email');
const password= document.querySelector('#password');

//Eventos
document.addEventListener('submit', (e) =>{
    e.preventDefault();
    login();
})

async function login(){
    try {
        const response= await fetch(`${url_Companies}?email=${email.value} `);
        const data = await response.json()
        console.log(data)

        if(!data){
            console.error("Email no registrado")
            alert("Email no registrado")
            return;
        }
        if(data[0].password !== password.value){
            console.error("La contraseña es incorrecta")
            alert("Contraseña incorrecta")
            return;
        }

        //Si todo esta bien guardo la informacion en el localStorage
        localStorage.setItem('user', JSON.stringify(data[0]));
        window.location.href= "administrator.html"
    } catch (error) {
        
    }

}