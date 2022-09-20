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