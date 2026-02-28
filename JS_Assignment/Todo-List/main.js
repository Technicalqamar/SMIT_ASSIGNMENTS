var todoInput = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var todoList = document.getElementById("todoList");

var todos = [];
var indexToBeUpdate = null;

function deleteTodo(id){

    for(var i=0; i<todos.length; i++){
        if (todos[i].id == id){
            todos.splice(i,1);
        }
    }

    // اگر list empty ہو جائے
    if(todos.length === 0){
        addBtn.style.display = 'inline';
        updateBtn.style.display = 'none';
        todoInput.value = '';
    }

    renderTodo();
}

function editTodo(id){

    addBtn.style.display ='none'
    updateBtn.style.display = 'inline'

    for(var i = 0; i < todos.length; i++){
        if(id == todos[i].id){
            todoInput.value = todos[i].text
            indexToBeUpdate = i ;
        }
    }
}

function updateTodo(){

    todos[indexToBeUpdate].text = todoInput.value
     
    addBtn.style.display = 'inline'
    updateBtn.style.display = 'none'

    todoInput.value = '';

    renderTodo();
}

function addTodo(){

    if(todoInput.value == ""){
        alert("please enter a Something !")
        return
    }

    var todoObj = {
        id: (new Date().getTime()) + Math.floor(Math.random() * 999),
        text: todoInput.value,
        createdAt: new Date(),
    }

    todos.push(todoObj)
    todoInput.value = ' '
    renderTodo();
}

function renderTodo(){
    todoList.innerHTML = ''

    for(var i=0; i<todos.length; i++){

        var li = document.createElement("li")

        li.innerHTML = `
        <div class="todo-text">${todos[i].text}</div>

        <div class="btn-group">
            <span>${todos[i].createdAt.getDate()} - ${todos[i].createdAt.getMonth()+1} - ${todos[i].createdAt.getFullYear()}</span>

            <button class="editBtn" onclick="editTodo(${todos[i].id})">Edit</button>
            <button class="deleteBtn" onclick="deleteTodo(${todos[i].id})">Delete</button>
        </div>
        `;

        todoList.appendChild(li);
    }
}
