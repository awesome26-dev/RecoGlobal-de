function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

const modal_nick = document.getElementById("contact_info");
const button_nick = document.getElementById("btn_contact");
const close_button = document.getElementById("close_button");

button_nick.onclick = function() {
    modal_nick.style.display = "block";
}

close_button.onclick = function () {
    modal_nick.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal_nick) {

        console.log("gedrückt " + modal_nick.style.display)

        modal_nick.style.display = "none";
    }
}