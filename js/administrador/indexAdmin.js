import { deleteHttp, get, post, update } from '../api/clientHttp.js'
import { url_Jobs } from '../api/URL.js'

//Selectores
const formNewJob = document.querySelector('#formNewJob')
const titleJob = document.querySelector('#titleJob')
const experience = document.querySelector('#experience')
const salary = document.querySelector('#salary')
const location = document.querySelector('#Location')
const modality = document.querySelector('#modality')
const description = document.querySelector('#description')
const btnLoginDirecto = document.querySelector('#btnLoginDirecto')
const btnCreateAccount = document.querySelector('#btnCreateAccount')
const btnAddJobModal = document.querySelector('#btnAddJobModal')

const idJobsUpdate = document.querySelector('#idJobsUpdate')

//Eventos

formNewJob.addEventListener('submit', e => {
    e.preventDefault()
    console.log(idJobsUpdate.value)
    if (idJobsUpdate.value) {
        upDateJobs(idJobsUpdate.value)
    } else {
        createJob()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    getJob()
})

//............Crear nuevo job............

async function createJob() {
    const id = Math.floor(Math.random() * 10000)
    const d = new Date()

    const newJob = {
        id: JSON.stringify(id),
        title: titleJob.value,
        description: description.value,
        publicationDate: d.toDateString(),
        location: location.value,
        experience: experience.value,
        modality: modality.value,
        salary: salary.value,
        imagen: '../../assets/img/logo.webp',
        companyId: '',
    }

    const postJob = await post(url_Jobs, newJob)
}

// ........Mostrar todos los Job...........

async function getJob() {
    const dataJob = await get(url_Jobs)

    printJobs(dataJob)
}

const jobTbody = document.querySelector('#jobTbody')

function printJobs(jobs) {
    jobTbody.innerHTML = ''

    console.log(jobs)
    jobs.forEach(job => {
        const tr = document.createElement('tr')
        const tdImagen = document.createElement('td')
        const tdCompany = document.createElement('td')
        const tdDescription = document.createElement('td')
        const tdLocation = document.createElement('td')
        const tdExperience = document.createElement('td')
        const tdModality = document.createElement('td')
        const tdSalary = document.createElement('td')
        const tdButtons = document.createElement('td')

        const btnEdit = document.createElement('button')
        const btnDelete = document.createElement('button')

        btnEdit.textContent = 'Edit'
        btnDelete.textContent = 'Delete'

        btnEdit.classList.add('btn', 'btn-primary')
        btnDelete.classList.add('btn', 'btn-danger')

        btnDelete.addEventListener('click', () => {
            console.log('Eliminando')
            deleteCategory(job.id)
        })
        btnEdit.addEventListener('click', () => {
            console.log('Editando')
            loadInfoJob(job)
        })

        tdButtons.appendChild(btnEdit)
        tdButtons.appendChild(btnDelete)

        tdImagen.setAttribute('src', job.imagen)
        tdCompany.textContent = job.title
        tdDescription.textContent = job.description
        tdLocation.textContent = job.location
        tdExperience.textContent = job.experience
        tdModality.textContent = job.modality
        tdSalary.textContent = job.salary

        tr.appendChild(tdImagen)
        tr.appendChild(tdCompany)
        tr.appendChild(tdDescription)
        tr.appendChild(tdLocation)
        tr.appendChild(tdExperience)
        tr.appendChild(tdModality)
        tr.appendChild(tdSalary)
        tr.appendChild(tdButtons)

        jobTbody.appendChild(tr)
    })
}

//.........Eliminar los jobs...........

async function deleteCategory(id) {
    console.log('Eliminando id: ', id)

    await deleteHttp(`${url_Jobs}/${id}`)
    
}

//.... Editar  los jobs .............

async function upDateJobs(id) {
    console.log(id)

    const jobUpdate = {
        id: id,
        title: titleJob.value,
        description: description.value,
        publicationDate: new Date().toDateString(),
        location: location.value,
        experience: experience.value,
        modality: modality.value,
        salary: salary.value,
        imagen: '../../assets/img/logo.webp',
        companyId: '',

    }

    await update(`${url_Jobs}/${id}`, jobUpdate)
}

function loadInfoJob(job) {
    console.log('loading')
    titleJob.value = job.title
    description.value = job.description
    location.value = job.location
    experience.value = job.experience
    modality.value = job.modality
    salary.value = job.salary
    idJobsUpdate.value = job.id
    btnAddJobModal.click()
}
