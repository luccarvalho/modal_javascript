const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

[openModalButton, closeModalButton, fade].forEach((e) => {
    e.addEventListener("click", () => console.log("teste"))
});