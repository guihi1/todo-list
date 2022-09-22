import { myTasks } from "./index";

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
        div.textContent = myTasks[i][title];
        content.appendChild(div);
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        div.appendChild(check);
        check.addEventListener("click", () => {
            if(check.checked) {
                content.removeChild(div);
                myTasks.splice(i, 1);
            }
        })
    }
}