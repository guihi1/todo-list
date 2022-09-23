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
        const titleCont = document.createElement("div");
        titleCont.classList.add("check-title");
        div.appendChild(titleCont);
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        titleCont.appendChild(check);
        check.addEventListener("click", () => {
            if(check.checked) {
                content.removeChild(div);
                myTasks.splice(i, 1);
                showTasks();
            }
        })
        const p = document.createElement("p");
        p.textContent = `${myTasks[i].title}`;
        titleCont.appendChild(p);

        const option = document.createElement("div");
        option.classList.add("options");
        div.appendChild(option);

        const date = document.createElement("p");
        date.textContent = `${myTasks[i].date.substring(0, 10)}`;
        option.appendChild(date);

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

        const expanded = document.createElement("div");
        drop.addEventListener("click", () => {
            if(drop.classList.contains("expanded")){
                while(expanded.firstChild){
                    expanded.removeChild(expanded.lastChild);
                }
                div.removeChild(expanded);
                drop.textContent = "expand_more";
                drop.classList.remove("expanded");
                div.style.height = "40px";
            } else {
                div.appendChild(expanded);
                drop.classList.add("expanded");
                drop.textContent = "expand_less";
                div.style.height = "115px";
                const desc = document.createElement("p");
                desc.classList.add("expanded-content");
                desc.textContent = `Description: ${myTasks[i].description}`;
                expanded.appendChild(desc);
                const dueDate = document.createElement("p");
                dueDate.classList.add("expanded-content");
                dueDate.textContent = `Due date: ${myTasks[i].date.substring(0, 10)}, ${myTasks[i].date.substring(11, 16)}`;
                expanded.appendChild(dueDate);
                const priorityText = document.createElement("p");
                priorityText.classList.add("expanded-content");
                if(myTasks[i].priority == "1"){
                    priorityText.textContent = "Priority: Low";
                } else if(myTasks[i]. priority == "2"){
                    priorityText.textContent = "Priority: Medium";
                } else {
                    priorityText.textContent = "Priority: High";
                }
                expanded.appendChild(priorityText);
            }
        })

        const lineBreak = document.createElement("hr");
        content.appendChild(lineBreak);
    }
}