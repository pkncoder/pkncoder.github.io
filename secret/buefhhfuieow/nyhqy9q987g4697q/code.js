function generateButtonMap()
{
    let controller = document.getElementById("controllerButton").value;
    let varName = document.getElementById("varNameButton").value;
    let button = document.getElementById("buttonButton").value;

    button = button.toUpperCase()

    if (button.search("[ABXY]") || button.search("[LB]") || button.search("[RB]"))
    {
        if (button === "A")
        {
            button = 1;

            document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
        }

        else if (button === "B")
        {
            button = 2;

            document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
        }

        else if (button === "X")
        {
            button = 3;

            document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
        }

        else if (button === "Y")
        {
            button = 4;

            document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
        }

        else if (button === "LB")
        {
            button = 5;

            document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
        }

        else if (button === "RB")
        {
            button = 6;

        }
    }

    document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
}

function generatePOVMap()
{
    let controller = document.getElementById("controllerPOV").value;
    let varName = document.getElementById("varNamePOV").value;
    let pov = document.getElementById("povPOV").value;

    pov = pov.toUpperCase();

    if (pov === "UP")
    {
        pov = 0;
    }

    else if (pov === "RIGHT")
    {
        pov = 90;
    }

    else if (pov === "DOWN")
    {
        pov = 180;
    }

    else if (pov === "LEFT")
    {
        pov = 270;
    }

    document.getElementById("result").value = "private final POVButton " + varName + " = new POVButton(" + controller + ", " + pov + ");";
}