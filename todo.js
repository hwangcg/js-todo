const todoForm = document.querySelector(".form_todo"),
      todoInput = todoForm.querySelector("input"),
      todoList = document.querySelector(".todo_list");

let todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentNode;
    todoList.removeChild(li);
    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    console.log('cleanTodos', cleanTodos);
    
    todos = cleanTodos;
    saveTodos();
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    setTodo(currentValue);
    todoInput.value = "";
}

function setTodo(value){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = value;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);

    const todoObj = {
        text: value,
        id: newId
    }
    todos.push(todoObj);
    saveTodos();
}

function loadTodo(){
    const loadedTodos = localStorage.getItem("todos");
    if( loadedTodos !== null ){
        const parsedTodo = JSON.parse(loadedTodos)
        parsedTodo.forEach(function(todo){
            setTodo(todo.text);
        })
    }
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", submitHandler);
}

init();