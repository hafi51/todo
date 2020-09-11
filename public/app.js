list = document.getElementById('list')

keyVal = 0
myDatabase = firebase.database()
function addTodo() {
    todoItem = document.getElementById('item')
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
    
        //li input
    if (todoItem.value != "") {
        li = document.createElement('li')
        inputField = document.createElement('input')
        label = document.createElement('label')
        li.setAttribute('class', 'li')
        inputField.value = todoItem.value
        label.innerHTML = keyVal
        inputField.setAttribute("type","text")
        inputField.setAttribute("id","inputField")
        inputField.setAttribute("class","input")
        inputField.setAttribute("disabled","")
        li.appendChild(label)
        li.appendChild(inputField)
        li.appendChild(editBtn)
        li.appendChild(delBtn)
        list.appendChild(li)
        todoItem.value = ""
        
        for(i=0;i<1;i++){
            myDatabase.ref(keyVal).set(`${inputField.value}`)
            keyVal++
        }       
    } else {
        alert("Enter Value.")
    }   
}

function delAll() {
    list.innerHTML = ""
    myDatabase.ref('/').remove()
    keyVal = 0
}

function delItem(e) {
    e.parentNode.remove()
    toRem = e.parentNode.firstChild.innerHTML
    myDatabase.ref(toRem).remove()
}

function editItem(e) {
    e.parentNode.childNodes[1].removeAttribute("disabled")
    e.parentNode.childNodes[1].focus() 
    e.innerHTML = "Update"
    e.setAttribute('onclick', 'updateItem(this);')
}
function updateItem(e){
    e.innerHTML = "Edit Item"
    e.parentNode.firstChild.setAttribute("disabled","")
    e.setAttribute('onclick', 'editItem(this);')
    toUpdate = e.parentNode.firstChild.innerHTML
    updateVal = e.parentNode.childNodes[1].value
    myDatabase.ref(toUpdate).set(updateVal)
}
