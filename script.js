document.getElementById("add-button").addEventListener("click", function () {
    let value = document.getElementById("task-input").value;
    
    if(value){
        addItem(value);
        document.getElementById("task-input").value = "";
    }
})

document.getElementById("task-input").addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        let value = document.getElementById("task-input").value;
        if(value){
            addItem(value);
            document.getElementById("task-input").value = "";
        }
    }
})

function addItem(text) {
    let list = document.getElementById("list");
    let item = document.createElement("li");
    item.classList.add("item");

    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(){
        taskContent.classList.toggle("line-through");
    });

    let taskContent = document.createElement("span");
    taskContent.classList.add("task-content");
    taskContent.innerText = text;
    
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function(){
        list.removeChild(item);
    });

    item.appendChild(checkbox);
    item.appendChild(taskContent);
    item.appendChild(deleteButton);

    list.appendChild(item);
}