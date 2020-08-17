var todoInput = document.getElementById("todo-input");
var todoButton = document.getElementById("todo-button");
var todoList = document.getElementById("todo-list");
function delTodo(e) {
  e.parentNode.remove();
  firebase.database().ref("todos").child(e.id).remove();
}
function editItem(e) {
  var x = e.parentNode.firstChild.innerHTML;
  var editValue = prompt("Update Task: ", x);
  var editTodo = {
    value: editValue,
    key: e.id,
  };
  firebase.database().ref("todos").child(e.id).set(editTodo);
  e.parentNode.firstChild.innerHTML = editValue;
}
firebase
  .database()
  .ref("todos")
  .on("child_added", function (data) {
    // main code

    //   if (todoInput.value=="") {
    //       alert("Please Enter Something")
    //   }

    event.preventDefault();
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("new-todo");
    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText);
    todoList.appendChild(li);
    todoInput.value = "";
    li.classList.add("list-item");
    var del = document.createElement("button");
    var edit = document.createElement("button");
    del.classList.add("item-trash");
    edit.classList.add("edit-item");
    edit.setAttribute("id", data.val().key);
    todoDiv.appendChild(li);
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(del);
    todoDiv.appendChild(edit);
    del.innerHTML = "X";
    edit.innerHTML = "E";
    del.setAttribute("id", data.val().key);
    del.setAttribute("onclick", "delTodo(this)");
    edit.setAttribute("onclick", "editItem(this)");
  });
function addTodo() {
  var todoInput = document.getElementById("todo-input");
  if(todoInput.value==""){
      alert("Please Enter Something")
      event.preventDefault()
  }
  else{
    var fd = firebase.database().ref("todos");
    event.preventDefault();
    var key = fd.push().key;
    var todo = {
      value: todoInput.value,
      key: key,
    };
  }
  fd.child(key).set(todo);
  //   console.log(key);
}
