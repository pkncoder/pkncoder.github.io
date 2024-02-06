// The main function to solve the equation
function newSolve()
{
    // Get the ul
    let ul = document.getElementById("cache-ul");

    // Make an li
    let li = document.createElement('li');

    // Make the text
    let text = document.createTextNode(document.getElementById("display").value + " = ")

    // Append the text to the list and give the list the cached-item class
    li.appendChild(text);
    li.classList.add('cached-item')

    // Append the li to the ul
    ul.appendChild(li);


    // Get the equation
    let equation = document.getElementById("display").value;

    // Get the token list
    let equationList = parseEquation(equation);

    // Get the final answer
    let answer = solveEquation(equationList);

    // Set that answer in our answer box
    document.getElementById("display").value = "  " + answer;


    // Add the answer to the li
    li.innerHTML += document.getElementById("display").value;
}

// This will split up our equation harder then parents of a gay kid
function parseEquation(equation)
{
    // Vairiables
    // This is where we will store the tokens
    let tokenList = [];

    // This is a temp string to add stuff to
    let tempStr = "";

    // This is the list of acceptable opporators
    let opporators = ["+", "-", "*", "/", "^"];


    // Main for loop
    for (var i = 0; i < equation.length; i++)
    {
        if (equation[i] === ' ')
        {

        }

        /* 
         * If the current spot of the equation is a number, or a decimal point
         * just add to the temp string.
         */
        else if (!isNaN(parseInt(equation[i])) || equation[i] === ".")
        {
            // Adding to the temp string
            tempStr += equation[i];
        }

        // If the current index is an opporator, then split
        else if (opporators.includes(equation[i]))
        {
            // Splitting
            // Start by pushing the temp string to the token list
            // Make it an int for easy use later
            tokenList.push(parseFloat(tempStr));

            // Then put the temp in tempStr and reset it
            tempStr = "";

            // Finnaly, push the current opporator to the token list
            tokenList.push(equation[i]);
        }

        // Final case, if it is the end of the equation, do one last split
        if (i === equation.length - 1)
        {
            // Splitting
            // Start by pushing the temp string to the token list
            // Make it an int for easy use later
            tokenList.push(parseFloat(tempStr));

            // Then put the temp in tempStr and reset it
            tempStr = "";
        }
    }

    return tokenList;
}

// This will take our equation list and solve it to give an answer
function solveEquation(equationList)
{
    // This is our Order of Opporations
    // First the raising to the power
    while (equationList.indexOf("^") != -1)
    {
        // Set a index var so it's more readable
        let currentCarrotSpot = equationList.indexOf("^");

        // Set equation list at the index before the carrot to be the answer
        // Basicly, do the token before the carrot, and the one after
        // Then raise before to after and set it as that
        equationList[currentCarrotSpot - 1] = equationList[currentCarrotSpot - 1] ** equationList[currentCarrotSpot + 1];

        // After  that, remove the two tokens that are used up (carrot and after)
        equationList.splice(currentCarrotSpot, 2);
    }

    // Times and multiply
    while (findClosest("*", "/", equationList) != -1)
    {
        // Make a current opporator list variable for readablility (and writeability)
        let currentOpp = findClosest("*", "/", equationList);

        // Make a currentSpot variable
        let currentSpot = equationList.indexOf(currentOpp);

        // Test to see if we're multiplying first
        if (currentOpp === "*")
        {
            // If we are then set the before to the ans of the mult
            equationList[currentSpot - 1] = equationList[currentSpot - 1] * equationList[currentSpot + 1];

            // Then remove the mult and the after so we can just leave the ans of that
            equationList.splice(currentSpot, 2)
        }

        // If not then devide
        else if (currentOpp === "/")
        {
            // If we are then set the before to the ans of the devd
            equationList[currentSpot - 1] = equationList[currentSpot - 1] / equationList[currentSpot + 1];

            // Then remove the devd and the after so we can just leave the ans of that
            equationList.splice(currentSpot, 2);
        }
    }

    // Plus and minus
    while (findClosest("+", "-", equationList) != -1)
    {
        // Get the current opporator
        let currentOpp = findClosest("+", "-", equationList);

        // Get the spot of that
        let currentSpot = equationList.indexOf(currentOpp);

        // Start the test
        // Plus case
        if (currentOpp === "+")
        {
            // Set the before to the before plus the after
            equationList[currentSpot - 1] = equationList[currentSpot - 1] + equationList[currentSpot + 1];

            // Then remove the + and the after
            equationList.splice(currentSpot, 2);
        }

        // Minus case
        else
        {
            // Set the before to b - a
            equationList[currentSpot - 1] = equationList[currentSpot - 1] - equationList[currentSpot + 1];

            // Then remove the - and the a
            equationList.splice(currentSpot, 2);
        }
    }

    // Return equation list, which *should* hold only one value
    return equationList;
}

// This will take two strings and find the closest occorence of them (and it's location)
function findClosest(thingOne, thingTwo, findingIn)
{
    // First check for no occourance in either of the things
    if (findingIn.indexOf(thingOne) === -1 && findingIn.indexOf(thingTwo) === -1)
    {
        // If true, return -1
        return -1;
    }

    // Then check for if thing one isn't present
    else if (findingIn.indexOf(thingOne) === -1)
    {
        // If true then return thing two, as it has to be
        return thingTwo;
    }

    // Then check the opposite of the previous
    else if (findingIn.indexOf(thingTwo) === -1)
    {
        // Same thing, but thing one
        return thingOne;
    }

    // Check to see if thing one is less spot then thing two
    else if (findingIn.indexOf(thingOne) < findingIn.indexOf(thingTwo))
    {
        // If true return thing one
        return thingOne;
    }

    // The only other case is for thing two
    else
    {
        // Return thing two
        return thingTwo;
    }
}




let extrasShown = false;

function appendToDisplay (item) {
    document.getElementById("display").value += item;
}

function clearDisplay () {
    document.getElementById("display").value = '  ';
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
          newSolve();
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