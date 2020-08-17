var todoInput = document.getElementById("todo-input");
var todoButton = document.getElementById("todo-button");
var todoList = document.getElementById("todo-list");
function delTodo(e){
    e.parentNode.remove()
}
function addTodo(){
    if (todoInput.value=="") {
        alert("Please Enter Something")
    } else {
            event.preventDefault();
            var todoDiv=document.createElement('div')
            todoDiv.classList.add('new-todo')
            var li=document.createElement('li');
            var liText=document.createTextNode(todoInput.value)
            li.appendChild(liText)
            todoList.appendChild(li)
            todoInput.value=""
            li.classList.add("list-item")
            var del=document.createElement('button');
            del.classList.add('item-trash')
            todoDiv.appendChild(li)
            todoList.appendChild(todoDiv)
            todoDiv.appendChild(del)
            del.innerHTML="X"
            del.setAttribute('onclick',"delTodo(this)")
            console.log(todo.Div)
    }
}
// todoButton.addEventListener("Click", addTodo);

// function addTodo(event) {
//   event.preventDefault();
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   const newTodo = document.createElement("li");
//   newTodo.innerText = "Gopal";
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="fa fa-check"></i>';
//   completedButton.classList.add = "complete-btn";
//   todoDiv.appendChild(completedButton);

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fa fa-check"></i>';
//   trashButton.classList.add = "trash-btn";
//   todoDiv.appendChild(trashButton);

//   todoList.appendChild(todoDiv);
// }


