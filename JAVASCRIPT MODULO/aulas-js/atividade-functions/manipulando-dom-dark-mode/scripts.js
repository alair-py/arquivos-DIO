
const darkStyle = "dark";
const darkBtn = "darkBtn";

const button = document.getElementById("btn");
const container = document.getElementById("container");
const h1 = document.getElementById("text");



function changeTheme() {
    themeChange();
    textChange();
}


function themeChange() {
    button.classList.toggle(darkStyle, darkBtn);
    button.classList.toggle(darkBtn);
    container.classList.toggle(darkStyle);
}

function textChange() {
    if(container.classList.contains(darkStyle)) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Está em Dark Mode";
        return;
    }
    button.innerHTML = "Dark Mode";
    h1.innerHTML = "Está em Light Mode";
}



button.addEventListener("click", changeTheme);