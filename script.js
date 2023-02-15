const nameContainer = document.querySelector('#name')
let nameUser = localStorage.getItem('name') 
if(nameUser) {
    nameContainer.innerHTML = `اهلا بيك يا ${nameUser}`
} else {
    let getName = prompt("اهلا بيك في دليلك للقاء المغتربين الثامن , ممكن تقولنا اسمك ؟ ")
    localStorage.setItem('name' , getName) 
    nameContainer.innerHTML = `اهلا بيك يا ${getName}`
}