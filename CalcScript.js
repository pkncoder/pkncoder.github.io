const display = document.getElementById("display");

function appendToDisplay (item) {
    document.getElementById("display").value += item;
}

function clearDisplay () {
    document.getElementById("display").value = '  ';
}

function solve () {
    let ul = document.getElementById("cache-ul");
    let li = document.createElement('li');

    let text = document.createTextNode(document.getElementById("display").value + " = " + eval(document.getElementById("display").value))

    li.appendChild(text);
    li.classList.add('cached-item')

    ul.appendChild(li);

    document.getElementById("display").value = "  " + eval(document.getElementById("display").value);
}