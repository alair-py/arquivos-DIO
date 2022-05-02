var valueElement = document.getElementById('value');

var valueText = 0;


function decrement() {
    valueText = valueText - 1;

    valueElement.innerHTML = valueText;
}


function increment() {
    valueText = valueText + 1;

    valueElement.innerHTML = valueText;
}