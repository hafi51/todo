//alert("due to exams can't complete")
list = document.getElementById('list')


function addTodo() {
    todoItem = document.getElementById('item')
        //li
    li = document.createElement('li')
    liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)

    // del btn
    delBtn = document.createElement('button')
    delText = document.createTextNode('Delete')
    delBtn.appendChild(delText)
    delBtn.setAttribute('onclick', 'delItem(this)')

    //edit btn
    editBtn = document.createElement('button')
    editText = document.createTextNode('Edit Item')
    editBtn.appendChild(editText)
    editBtn.setAttribute('onclick', 'editItem(this)')



    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)
    todoItem.value = ""

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