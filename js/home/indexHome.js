import {get} from "../api/clientHttp.js"
import{url_Jobs} from "../api/URL.js"

//selectores
const cardJob= document.querySelector('#cardJob');

//Eventos 

document.addEventListener('DOMContentLoaded', ()=>{
    getAllJob();
    console.log("Hola")
})

async function getAllJob() {
    const dataJob = await get(url_Jobs);
    console.log("HolaGetAll")
    printAllJobs(dataJob)
}

function printAllJobs(jobs){

    cardJob.innerHTML="";

    jobs.forEach(job => {
        const contenCard= document.createElement('p');

        contenCard.innerHTML= `
        <div class="card-job" id="cardJob">
        <h2>${job.title}</h2>

        <p>
        ${job.description}
        </p>

        <div class="row">
          <div class="col-6">
            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-current-location"></i>
              <span class="fw-semibold">${job.location}</span>
            </div>

            <div class="d-flex gap-2 align-items-center fs-5 text-muted">
              <i class="bx bx-time"></i>
              <span class="fw-semibold">${job.publicationDate}</span>
            </div>
          </div>

          <div class="col-6 d-flex justify-content-end">
            <img
              src="${job.imagen}"
              alt="logo"
              height="80"
              width="80"
              class="object-fit-contain rounded-circle img-company"
            />
          </div>
        </div>
        </div>
        `
        cardJob.appendChild(contenCard);
    });
    


}


//filtrar

  const CriterioBusqueda= {
    modality: "",
  }
  
  //Selector
  const selectmodality= document.querySelector('#modality-filter');

  selectmodality.addEventListener('input', (event)=> {
    CriterioBusqueda.modality=event.target.value;
        console.log(CriterioBusqueda.modality);
        //llamando funcion de filtro de alto nivel
        //filtrarCriterio();
  })


  function filtrarModality(arrayModality){
        const resultado= arrayModality.filter(filtrarHija);
    }

  //funcion hija

  function filtrarHija(modality){
    if(CriterioBusqueda.modality){
        return
    }else{
        return modality;
    }
  }













