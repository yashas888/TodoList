const btn = document.querySelector(".add_btn");
const input = document.querySelector(".todo_ip");
const todoList = document.querySelector(".todo-list")


function addTodo(){
    //get ip value from input field
    let obtainedInput = input.value;
    console.log(obtainedInput);
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
        checkBtn.innerHTML = "Check";
        checkBtn.classList.add("complete-btn");
        todoDiv.appendChild(checkBtn)
        //create check button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "delete";
        deleteBtn.classList.add("complete-btn");
        todoDiv.appendChild(deleteBtn)
        //append entire created todo div to todo-list
        todoList.appendChild(todoDiv);
    }

// addTodo(arr,input)
