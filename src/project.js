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

export function removeProject() {
    
}