const btn = document.querySelector(".add_btn");
const input = document.querySelector(".todo_ip");
const todoList = document.querySelector(".todo-list")


function addTodo() {
    //get ip value from input field
    let obtainedInput = input.value;
    console.log(obtainedInput);
    if (obtainedInput != 0) {
        //create element div
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create li
        let newTodo = document.createElement("li");
        newTodo.innerHTML = `${obtainedInput}`;
        newTodo.classList.add("todo-item")
        todoDiv.appendChild(newTodo);
        //create check button
        let checkBtn = document.createElement("button");
        checkBtn.innerHTML = "check";
        checkBtn.classList.add("complete-btn");
        todoDiv.appendChild(checkBtn)
        //create check button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "delete";
        deleteBtn.classList.add("delete-btn");
        todoDiv.appendChild(deleteBtn)
        //append entire created todo div to todo-list
        todoList.appendChild(todoDiv);
    }
    else {
        alert("Mention the todo you want to add")
    }
}

todoList.addEventListener("click",deleteTodo);

function deleteTodo(e){
    const clickedItem = e.target;
    console.log(clickedItem.parentElement)
    // document.getElementsByClassName("delete-btn")[0]
    if(clickedItem.classList[0] === 'delete-btn'){
        const todo = clickedItem.parentElement;
        todo.remove();
    }

    if(clickedItem.classList[0] === 'complete-btn'){
        const todo = clickedItem.parentElement;
        todo.classList.toggle("completed");
    }
}



