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

function clearCache () {
    let ul = document.getElementById('cache-ul');

    ul.innerHTML = '';
}

function setupEventListener () {
    let display = document.getElementById("display");

    display.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Trigger the button element with a click
          solve()
        }
      });
}