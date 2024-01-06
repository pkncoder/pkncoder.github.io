const display = document.getElementById("display");

let extrasShown = false;

let closerNum = 0;

function appendToDisplay (item) {
    document.getElementById("display").value += item;

    if (item === 'sqrt(')
    {
        closerNum++;
    }

    else if (item == 'cos(')
    {
        closerNum++;
    }

    else if (item == 'sin(')
    {
        closerNum++;
    }

    else if (item == 'tan(')
    {
        closerNum++;
    }
}

function clearDisplay () {
    document.getElementById("display").value = '  ';
}

function solve () {
    let ul = document.getElementById("cache-ul");
    let li = document.createElement('li');

    let text = document.createTextNode(document.getElementById("display").value + ')'.repeat(closerNum) + " = " + eval('with (Math) ' + document.getElementById("display").value + ')'.repeat(closerNum)))

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

function largenCalc () {
    let extras = document.getElementById("extras_holder");
    let main_div = document.getElementById("main_div");

    if (extrasShown)
    {
        extras.style.display = 'none';
        main_div.setAttribute("style", "grid-template-columns: repeat(2, 1fr)");
        extrasShown = false;
    }

    else
    {
        extras.style.display = 'block';
        main_div.setAttribute("style", "grid-template-columns: repeat(3, 1fr)");
        extrasShown = true;
    }
}