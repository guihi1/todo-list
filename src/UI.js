export function dropdown() {
    const dropButton = document.querySelector(".dropdown-button");
    dropButton.addEventListener("click", () => {
        const dropContent = document.querySelector(".dropdown-content");
        if(dropContent.classList.contains("show")) {
            dropContent.classList.remove("show");
        } else {
            dropContent.classList.add("show");
        }
    });   
}