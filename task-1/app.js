let listcontiner = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

function addTask(){
    if(inputBox.value === ''){
        alert('Add your task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listcontiner.appendChild(task)

        let span = document.createElement('span')
        span.textContent = '\u00d7'
        task.appendChild(span)
    }
    inputBox.value = ''
    saveData()
}

listcontiner.addEventListener('click', (el)=>{
    if(el.target.tagName == 'Li'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("tasks", listcontiner.innerHTML)
}

function showData(){
    listcontiner.innerHTML = localStorage.getItem('tasks')
}

showData()