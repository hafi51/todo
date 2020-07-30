list = document.getElementById('list')


function addTodo() {
    todoItem = document.getElementById('item')
    
        //li input
    if (todoItem.value != "") {
        li = document.createElement('li')
        li.setAttribute('class', 'li')
        inputField = document.createElement('input')
        inputField.setAttribute("type","text")
        inputField.value = todoItem.value
        inputField.setAttribute("id","inputField")
        inputField.setAttribute("class","input")
        inputField.setAttribute("disabled","")
        li.appendChild(inputField)
        li.appendChild(editBtn)
        li.appendChild(delBtn)
        list.appendChild(li)
        todoItem.value = ""
    } else {
        alert("Enter Value.")
    }

    // del btn
    delBtn = document.createElement('button')
    delText = document.createTextNode('Delete')
    delBtn.appendChild(delText)
    delBtn.setAttribute('onclick', 'delItem(this)')
    delBtn.className += "liBtn"

    //edit btn
    editBtn = document.createElement('button')
    editText = document.createTextNode('Edit Item')
    editBtn.appendChild(editText)
    editBtn.setAttribute('onclick', 'editItem(this);')
    editBtn.setAttribute('class', 'liBtn')
}

function delAll() {
    list.innerHTML = ""
}

function delItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    e.parentNode.firstChild.removeAttribute("disabled")
    e.parentNode.firstChild.focus() 
    e.innerHTML = "Update"
    e.setAttribute('onclick', 'updateItem(this);')
}
function updateItem(e){
    e.innerHTML = "Edit Item"
    e.parentNode.firstChild.setAttribute("disabled","")
    e.setAttribute('onclick', 'editItem(this);')
}
