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

export function makeForm() {
    const newTask = document.querySelector(".plus-button");
    newTask.addEventListener("click", () => {
        const form = document.createElement("form");
        document.querySelector("body").appendChild(form);

        const titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Title";
        form.appendChild(titleLabel);
        const title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("id", "title")
        form.appendChild(title);
        
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Due date";
        dateLabel.setAttribute("for", "date");
        form.appendChild(dateLabel);
        const dueDate = document.createElement("input");
        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("id", "date");
        form.appendChild(dueDate)

        const descriptionLabel = document.createElement("label");
        descriptionLabel.setAttribute("for", "description");
        descriptionLabel.textContent = "Description";
        form.appendChild(descriptionLabel);
        const description = document.createElement("textarea");
        description.setAttribute("id", "description");
        description.setAttribute("rows", "4");
        description.setAttribute("cols", "50");
        form.appendChild(description);

        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "priority");
        priorityLabel.textContent = "Priority: ";
        form.appendChild(priorityLabel);
        const priority = document.createElement("select");
        priority.setAttribute("id", "priority");
        form.appendChild(priority);
        const low = document.createElement("option");
        low.setAttribute("value", "1");
        low.textContent = "Low";
        priority.appendChild(low);
        const medium = document.createElement("option");
        medium.setAttribute("value", "2");
        medium.textContent = "Medium";
        priority.appendChild(medium);
        const high = document.createElement("option");
        high.setAttribute("value", "3");
        high.textContent = "High";
        priority.appendChild(high);

        const addButton = document.createElement("button");
        addButton.textContent = "Add task";
        addButton.setAttribute("type", "button");
        form.appendChild(addButton);

        document.querySelector(".page-mask").style.visibility = "visible";
    });
}