import "./styles.css";
import { dropdown, addProject, showForm, hideForm, showTasks } from "./UI";
import { task } from "./constructor";

dropdown();
addProject();
showForm();
hideForm();

export let myTasks = [];

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let priority = document.getElementById("priority").value;
    let description = document.getElementById("description").value;
    const newTask = new task(title, date, priority, description);
    myTasks.push(newTask);
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
    showTasks();
})