function appendToDisplay (item) {
    document.getElementById("display").value += item;
}

function clearDisplay () {
    document.getElementById("display").value = '  '
}

function solve () {
    document.getElementById("display").value = "  " + eval(document.getElementById("display").value)
}