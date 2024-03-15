import { post } from "../api/clientHttp.js";
import {url_Companies} from "../api/URL.js"


//Selectores
const formRegistro= document.querySelector('#formRegistro');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const passwordConfirmation= document.querySelector('#passwordConfirmation');
const company= document.querySelector('#company');
const imagen= document.querySelector('#imagen');

const btnLoginDirecto= document.querySelector('#btnLoginDirecto');
const btnCreateAccount= document.querySelector('#btnCreateAccount');

//Eventos

formRegistro.addEventListener('submit', (e)=>{
   
    e.preventDefault();
    register();
});

//Registrar una nueva empresa
async function register(){

    
    const id= Math.floor(Math.random() * 10000);
    const nit= Math.floor(Math.random() * 10000000);

    const newCompany = {
        id: JSON.stringify(id),
      email: email.value,
      nameCompany: company.value,
      imageCompany: "../../assets/img/9433441.jpg",
      nit: JSON.stringify(nit),
      password: password.value
    }

    confirmEmail();


    if(password.value != passwordConfirmation.value){
        alert("contraseñas diferentes")
        return
    }
    
    console.log(newCompany);
    const registro = await post(url_Companies, newCompany);
    window.location.href= "/index.html"
};

//Verficar si el correo ya existe

async function confirmEmail(){
    try {
        const response= await fetch(url_Companies);
        const data= await response.json();
        return data;
    } catch (error) {
        
    }
    const companiesRegistered=  data.find(user=> user.email === correo);

    if(companiesRegistered){
        return alert("El correo ya se encuentra registrado ")
    }
}