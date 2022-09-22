import "./styles.css";
import { dropdown, addProject, showForm, hideForm, showTasks, index } from "./UI";
import { task } from "./constructor";

dropdown();
addProject();
showForm();
hideForm();

export let myTasks = [];

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    if(document.querySelector("form").classList.contains("editing")) {
        let title = document.getElementById("title").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;
        let description = document.getElementById("description").value;
        myTasks[index] = new task(title, date, priority, description);
        document.querySelector("form").classList.remove("editing");
        document.getElementById("add").textContent = "Add task";
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
        document.getElementById("priority").value = "1";
        showTasks();
    } else {
        let title = document.getElementById("title").value;
        let date = document.getElementById("date").value;
        let priority = document.getElementById("priority").value;
        let description = document.getElementById("description").value;
        const newTask = new task(title, date, priority, description);
        myTasks.push(newTask);
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
        document.getElementById("priority").value = "1";
        showTasks();
    }
})

