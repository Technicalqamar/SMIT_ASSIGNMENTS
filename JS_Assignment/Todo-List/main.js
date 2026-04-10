var todoInput = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var todoList = document.getElementById("todoList");

var todos = [];
var indexToBeUpdate = null;

todoInput.addEventListener('keydown' , function(event){
    if(event.key === 'Enter'){
        event.preventDefault;
        addTodo();
    }
})
function getLocalStorageData(){

    var getData = window.localStorage.getItem('todos');
    getData = JSON.parse(getData);

    if(getData !== null){
        todos = getData;
    }
    renderTodo();
}

getLocalStorageData();


function doneTodo(id){

    for(var i = 0; i < todos.length; i++){

        if(todos[i].id === id){
            todos[i].isCompleted = true;
            break;
        }
    }
     renderTodo();

}

function undoTodo(){

    for(var i = 0; i < todos.length; i++){

        if( todos[i].isCompleted == true){
            todos[i].isCompleted = false;
            break;
        }
    }
     renderTodo();

}

function deleteTodo(id){

    todoInput.value = '';

    
        addBtn.style.display = 'inline';
        updateBtn.style.display = 'none';

    for(var i=0; i<todos.length; i++){
        if (todos[i].id == id){
            todos.splice(i,1);
            window.localStorage.setItem('todos', JSON.stringify(todos));
            renderTodo();
        }
    }

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
        
    window.localStorage.setItem('todos', JSON.stringify(todos));

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
        isCompleted: false,
    }

    todos.push(todoObj)

    var stringData = JSON.stringify(todos);
    window.localStorage.setItem('todos',stringData)
    todoInput.value = ''
    renderTodo();
}

function renderTodo(){
    todoList.innerHTML = ''

    for(var i=0; i<todos.length; i++){

        var li = document.createElement("li")

        if(todos[i].isCompleted == true){
            li.classList.add("completed");
        }

       if(todos[i].isCompleted === true){

         li.innerHTML = `
        <div class="todo-text done">${todos[i].text}</div>

        <div class="btn-group">
            <span>${todos[i].createdAt.getDate()} - ${todos[i].createdAt.getMonth()+1} - ${todos[i].createdAt.getFullYear()}</span>

            <button class="doneBtn" onclick="doneTodo(${todos[i].id})">✔Done</button>
            <button class="undoBtn" onclick="undoTodo(${todos[i].id})">↩Undo</button>
        </div>
        `;

       }
       else{
         li.innerHTML = `
        <div class="todo-text">${todos[i].text}</div>

        <div class="btn-group">
            
            <button class="editBtn" onclick="editTodo(${todos[i].id})">👁‍🗨Edit</button>
            <button class="deleteBtn" onclick="deleteTodo(${todos[i].id})">🗑️Delete</button>
            <button class="doneBtn" onclick="doneTodo(${todos[i].id})">✔Done</button>
        </div>
        `;

       }
               todoList.appendChild(li);

    }
}

function deleteAll(){
    todos = [];
    window.localStorage.removeItem('todos');
    renderTodo();
}