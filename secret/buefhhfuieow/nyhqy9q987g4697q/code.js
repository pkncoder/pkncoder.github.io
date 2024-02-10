function generateButtonMap()
{
    let controller = document.getElementById("controllerButton").value;
    let varName = document.getElementById("varName").value;
    let button = document.getElementById("button").value;

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

function generateButtonFunctionter()
{
    // Input vales
    // The var name of the button
    let buttonName = document.getElementById("buttonNameFuncer").value;

    // The function name
    let onActivateFunc = document.getElementById("functionOnOnFuncer").value;

    // On press or on hold
    let pressOrHold = document.getElementById("eventFuncer").value;

    // The var name of your connectoin to your Mechanizms class
    let functionConnection = document.getElementById("functionConnectionLineFuncer").value;

    // The name of the on false function
    let onFalseFuncName = document.getElementById("onFalseEventNameFuncer").value;
    
    // This is our final code line
    let code = "";

    // Also lowercase the foolean values
    pressOrHold = pressOrHold.toLowerCase();



    // Start adding everything we need
    // This is the stuff we know that we need to add
    code += buttonName + ".";

    // Next test for if we will use on true or not (then add the rest we need)
    // If its on press, do dat
    if (pressOrHold === "press")
    {  
        code += "onTrue(new InstantCommand(() -> " + functionConnection + "." + onActivateFunc + "()))";
    }

    // Else, if we are making an on hold, just change the 'onTrue' to 'whileTrue'
    // Prob a more efficient way, but this is my site, and there are no more ppl, so shut up
    else if (pressOrHold === "hold")
    {
        code += "whileTrue(new InstantCommand(() -> " + functionConnection + "." + onActivateFunc + "()))";
    }



    // Test to see if the on false func name has somthing, if it does then add the on flase stuff, if not then
    if (onFalseFuncName === "")
    {
        code += ";";
    }

    // If it is however,
    else
    {
        // Add the on flase thing, isn't too hard
        code += ".onFalse(new InstantCommand(() -> " + functionConnection + "." + onFalseFuncName + "()));";
    }

    // This is the same as the return line in our function
    document.getElementById("result").value = code;
}