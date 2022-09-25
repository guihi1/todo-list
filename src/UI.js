import { myTasks } from "./index";
import { deleteFromStorage } from "./storage";

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
    const projectButton = document.querySelector(".project-button");
    projectButton.addEventListener("click", () => {
        document.querySelector(".page-mask").style.visibility = "visible";
        document.querySelector("#project-form").style.visibility = "visible";
    });

    const addProjectButton = document.getElementById("projectName-button");
    addProjectButton.addEventListener("click", () => {
        const projectsCont = document.querySelector(".dropdown-content");
        let projectName = document.getElementById("new-project").value;
        const projectDiv = document.createElement("li");
        projectDiv.classList.add("start");
        projectDiv.textContent = `${projectName}`;
        projectsCont.appendChild(projectDiv);
        const icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.textContent = "delete";
        projectDiv.appendChild(icon)
        projectDiv.addEventListener("click", () => {
            let anotherProject = myTasks.filter(x => x.project === projectName);
            showTasks(anotherProject);
            document.querySelector("#content-title").textContent = projectName;
        })
    })
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
    const cancelProject = document.getElementById("cancel-project");
    const addProject = document.getElementById("projectName-button");

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
        document.getElementById("project").value = "inbox";
        document.getElementById("add").textContent = "Add task";
    }) 
    
    addProject.addEventListener("click", () => {
        document.querySelector(".page-mask").style.visibility = "hidden";
        document.querySelector("#project-form").style.visibility = "hidden";
    })
    
    cancelProject.addEventListener("click", () => {
        document.querySelector(".page-mask").style.visibility = "hidden";
        document.querySelector("#project-form").style.visibility = "hidden";
        document.getElementById("new-project").value = "";
    })
}

export function showTasks(arr) {
    console.log(arr);
    const content = document.querySelector(".tasks");
    while(content.firstChild){
        content.removeChild(content.lastChild);
    }
    for(let i = 0; i < arr.length; i++){
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
                let projectIndex = myTasks.findIndex(el => el === arr[i]);
                myTasks.splice(projectIndex, 1);
                deleteFromStorage();
                showTasks(arr);
            }
        })
        const p = document.createElement("p");
        p.textContent = `${arr[i].title}`;
        titleCont.appendChild(p);

        const option = document.createElement("div");
        option.classList.add("options");
        div.appendChild(option);

        const date = document.createElement("p");
        date.textContent = `${arr[i].date.substring(0, 10)}`;
        option.appendChild(date);

        const trash = document.createElement("span");
        trash.classList.add("trash");
        trash.classList.add("material-symbols-outlined");
        trash.textContent = "delete";
        option.appendChild(trash);
        trash.addEventListener("click", () => {
            content.removeChild(div);
            let projectIndex = myTasks.findIndex(el => el === arr[i]);
            myTasks.splice(projectIndex, 1);
            deleteFromStorage();
            showTasks(arr);
        })
        
        const edit = document.createElement("span");
        edit.classList.add("material-symbols-outlined");
        edit.classList.add("edit");
        edit.textContent = "edit";
        option.appendChild(edit);
        edit.addEventListener("click", () => {
            index = myTasks.findIndex(el => el === arr[i]);
            document.querySelector("form").classList.add("editing");
            document.querySelector(".page-mask").style.visibility = "visible";
            document.querySelector("form").style.visibility = "visible";
            document.getElementById("title").value = arr[i].title;
            document.getElementById("date").value = arr[i].date;
            document.getElementById("description").value = arr[i].description;
            document.getElementById("priority").value = arr[i].priority;
            document.getElementById("project").value = arr[i].project;
            document.getElementById("add").textContent = "Edit task";
        })

        const drop = document.createElement("span");
        drop.classList.add("material-symbols-outlined");
        drop.classList.add("drop");
        drop.textContent = "expand_more";
        option.appendChild(drop);

        const expanded = document.createElement("div");
        expanded.classList.add("column");
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
                div.style.height = "145px";
                const desc = document.createElement("p");
                desc.classList.add("expanded-content");
                desc.textContent = `Description: ${arr[i].description}`;
                expanded.appendChild(desc);
                const dueDate = document.createElement("p");
                dueDate.classList.add("expanded-content");
                dueDate.textContent = `Due date: ${arr[i].date.substring(0, 10)}, ${arr[i].date.substring(11, 16)}`;
                expanded.appendChild(dueDate);
                const priorityText = document.createElement("p");
                priorityText.classList.add("expanded-content");
                if(arr[i].priority == "1"){
                    priorityText.textContent = "Priority: Low";
                } else if(arr[i]. priority == "2"){
                    priorityText.textContent = "Priority: Medium";
                } else {
                    priorityText.textContent = "Priority: High";
                }
                expanded.appendChild(priorityText);
                const projectDetail = document.createElement("p");
                projectDetail.textContent = `Project: ${arr[i].project}`;
                expanded.appendChild(projectDetail);
            }
        })

        const lineBreak = document.createElement("hr");
        content.appendChild(lineBreak);
    }
}

