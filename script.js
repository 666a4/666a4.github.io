function view(element){
    element.classList.toggle("off");
}

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const links = document.getElementById("links");
    const close = document.getElementById("close");

    menu.addEventListener("click", () => {
        view(links);
    });

    close.addEventListener("click", () => {
        view(links);
    });
});
