import "./styles.css";
import { dropdown, addProject, showForm, hideForm, showTasks, index } from "./UI";
import { task } from "./constructor";
import { newProject } from "./project";

dropdown();
addProject();
showForm();
hideForm();
newProject();

export let myTasks = [];

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    if(document.querySelector("form").classList.contains("editing")) {
        let title = document.getElementById("title").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;
        let description = document.getElementById("description").value;
        let project = document.getElementById("project").value;
        myTasks[index] = new task(title, date, priority, description, project);
        document.querySelector("form").classList.remove("editing");
        document.getElementById("add").textContent = "Add task";
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
        document.getElementById("priority").value = "1";
        document.getElementById("project").value = "inbox";
        showTasks();
    } else {
        let title = document.getElementById("title").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;
        let description = document.getElementById("description").value;
        let project = document.getElementById("new-project").value;
        const newTask = new task(title, date, priority, description, project);
        myTasks.push(newTask);
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
        document.getElementById("priority").value = "1";
        showTasks();
    }
})

