import { showTasks } from "./UI";
import { myTasks } from ".";

export function newProject(){
    const button = document.querySelector("#projectName-button");
    button.addEventListener("click", () => {
        const projectSelect = document.getElementById("project");
        let projectName = document.getElementById("new-project").value;
        const newOption = document.createElement("option");
        newOption.textContent = projectName;
        newOption.setAttribute("value", `${projectName}`);
        projectSelect.appendChild(newOption);
        document.getElementById("new-project").value = "";
    })
}

export let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

export function showProjectTasks() {
    const inbox = document.querySelector("#inbox");
    inbox.addEventListener("click", () => {
        document.querySelector("#content-title").textContent = "Inbox";
        let inboxTasks = myTasks.filter(x => x.project === "inbox");
        showTasks(inboxTasks);
    })

    const todayProject = document.querySelector("#today");
    todayProject.addEventListener("click", () => {
        document.querySelector("#content-title").textContent = "Today";
        let todayTasks = myTasks.filter(x => x.date.substring(0, 10) === today);
        showTasks(todayTasks);
    })

    const allTasks = document.querySelector("#all-tasks");
    allTasks.addEventListener("click", () => {
        document.querySelector("#content-title").textContent = "All tasks";
        showTasks(myTasks);
    })
}