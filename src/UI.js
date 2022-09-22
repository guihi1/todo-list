import { myTasks } from "./index";

export let index;
export function dropdown() {
    const dropButton = document.querySelector(".dropdown-button");
    const expand = document.getElementById("expand");
    dropButton.addEventListener("click", () => {
        const dropContent = document.querySelector(".dropdown-content");
        if(dropContent.classList.contains("show")) {
            dropContent.classList.remove("show");
            expand.textContent = "expand_more";
        } else {
            dropContent.classList.add("show");
            expand.textContent = "expand_less";
        }
    });   
}

export function addProject() {
    const projects = document.querySelector(".dropdown-content");
    const projectButton = document.createElement("li");
    const icon = document.createElement("span");
    icon.textContent = "add";
    icon.classList.add("material-symbols-outlined");
    projectButton.textContent = "Add project";
    projectButton.classList.add("project-button");
    projects.appendChild(projectButton);
    projectButton.appendChild(icon);
}

export function showForm() {
    const addTaskButton = document.querySelector(".plus-button");
    addTaskButton.addEventListener("click", () => {
        document.querySelector(".page-mask").style.visibility = "visible";
        document.querySelector("form").style.visibility = "visible";
    })
}

export function hideForm() {
    const addButton = document.getElementById("add");
    const cancel = document.getElementById("cancel");
    addButton.addEventListener("click", () => {
        document.querySelector(".page-mask").style.visibility = "hidden";
        document.querySelector("form").style.visibility = "hidden";
    })
    cancel.addEventListener("click", () => {
        document.querySelector(".page-mask").style.visibility = "hidden";
        document.querySelector("form").style.visibility = "hidden";
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
        document.getElementById("priority").value = "1";
        document.getElementById("add").textContent = "Add task";
    })   
}

export function showTasks() {
    const content = document.querySelector(".tasks");
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
    for(let i = 0; i < myTasks.length; i++){
        const div = document.createElement("div");
        div.classList.add("task");
        content.appendChild(div);
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        div.appendChild(check);
        check.addEventListener("click", () => {
            if(check.checked) {
                content.removeChild(div);
                myTasks.splice(i, 1);
                showTasks();
            }
        })
        const p = document.createElement("p");
        p.textContent = `${myTasks[i].title}`;
        div.appendChild(p);

        const date = document.createElement("p");
        date.textContent = `Time: ${myTasks[i].date.substring(11, 16)} Date: ${myTasks[i].date.substring(0, 10)}`;
        div.appendChild(date);

        const option = document.createElement("div");
        option.classList.add("options");
        div.appendChild(option);
        const trash = document.createElement("span");
        trash.classList.add("trash");
        trash.classList.add("material-symbols-outlined");
        trash.textContent = "delete";
        option.appendChild(trash);
        trash.addEventListener("click", () => {
            content.removeChild(div);
            myTasks.splice(i, 1);
            showTasks();
        })
        
        const edit = document.createElement("span");
        edit.classList.add("material-symbols-outlined");
        edit.classList.add("edit");
        edit.textContent = "edit";
        option.appendChild(edit);
        edit.addEventListener("click", () => {
            index = i;
            document.querySelector("form").classList.add("editing");
            document.querySelector(".page-mask").style.visibility = "visible";
            document.querySelector("form").style.visibility = "visible";
            document.getElementById("title").value = myTasks[i].title;
            document.getElementById("date").value = myTasks[i].date;
            document.getElementById("description").value = myTasks[i].description;
            document.getElementById("priority").value = myTasks[i].priority;
            document.getElementById("add").textContent = "Edit task";
        })

        const drop = document.createElement("span");
        drop.classList.add("material-symbols-outlined");
        drop.classList.add("drop");
        drop.textContent = "expand_more";
        option.appendChild(drop);
        drop.addEventListener("click", () => {
            
        })

        const lineBreak = document.createElement("hr");
        content.appendChild(lineBreak);
    }
}