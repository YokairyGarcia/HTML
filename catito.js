function ToggleEvent(id) {
    const element = document.getElementById(id);
    if (element.style.display ===  "none") {
        element.style.display = "block";
        event.target.textContent = "Menos";
    }
    else {
        element.style.display = "none";
        event.target.textContent = "Más";
    }
}