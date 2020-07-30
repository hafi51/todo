alert("due to exams can't complete")
list = document.getElementById('list')


function addTodo() {
    todoItem = document.getElementById('item')
        //li
    if (todoItem.value != "") {
        li = document.createElement('li')
        liText = document.createTextNode(todoItem.value)
        li.setAttribute('class', 'li')
        li.appendChild(liText)
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
        // delBtn.setAttribute('class', 'liBtn')

    //edit btn
    editBtn = document.createElement('button')
    editText = document.createTextNode('Edit Item')
    editBtn.appendChild(editText)
    editBtn.setAttribute('onclick', 'editItem(this)')
    editBtn.setAttribute('class', 'liBtn')



    // li.appendChild(editBtn)
    // li.appendChild(delBtn)
    // list.appendChild(li)
    // todoItem.value = ""

}

function delAll() {
    list.innerHTML = ""
}

function delItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    val = e.parentNode.firstChild.nodeValue
    editvalue = prompt("Enter value:", val)
    e.parentNode.firstChild.nodeValue = editvalue
    console.log(e.parentNode.firstChild.nodeValue)
}