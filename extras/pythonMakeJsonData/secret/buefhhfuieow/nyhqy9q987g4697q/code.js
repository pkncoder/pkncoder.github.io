function generateButtonMappingBasic()
{
    // The controller (XBOX) that is used
    let controllerName = document.getElementById("controllerButMap").value;

    // The button creation data
    let buttonVarName = document.getElementById("butVarNameButMap").value;
    let buttonNumber = document.getElementById("buttNumberButMap").value;

    // The return code
    document.getElementById("answer").value = "private final JoystickButton " + buttonVarName + " = new JoystickButton(" + controllerName + ", " + buttonNumber + ");";
}

function generateButtonMappingFull()
{
    // The controller variable (XBOX)
    let controllerName = document.getElementById("extraControllerNumButMap").value;

    // The button creation data
    let buttonVarName = document.getElementById("extraButtonVarNameButMap").value;
    let buttonType = document.getElementById("extrButtonTypeButMap").value.toUpperCase();

    // The button numberextrButtonTypeButMap
    let buttonNameOrNum = document.getElementById("extraButtonNameButMap").value.toLowerCase();

    // Declare code, the line that we will add to
    // Also add the constant normal stuff (yes that's it)
    let code = "private final ";

    // The test to see what kind of button it is
    // If it is a pov button then test for those keywords
    if (buttonType === "POV")
    {
        // Add the things we know now
        code += "POVButton " + buttonVarName + " = new POVButton(" + controllerName + ", ";

        // Then start testing to see what the button number is
        if (buttonNameOrNum === "up")
        {
            // Angle up == 0 and finish the code line
            code += "0);";
        }

        else if (buttonNameOrNum === "up-right")
        {
            // Angle up-right == 45 and finish the code line
            code += "45);";
        }

        else if (buttonNameOrNum === "right")
        {
            // Angle right == 90 and finish the code line
            code += "90);";
        }

        else if (buttonNameOrNum === "right-down")
        {
            // Angle right-down == 135 and finish the code line
            code += "135);";
        }

        else if (buttonNameOrNum === "down")
        {
            // Angle down == 180 and finish the code line
            code += "180);";
        }

        else if (buttonNameOrNum === "down-left")
        {
            // Angle down-left == 225 and finish the code line
            code += "225);";
        }

        else if (buttonNameOrNum === "left")
        {
            // Angle left == 270 and finish the code line
            code += "270);";
        }
        
        else if (buttonNameOrNum === "left-up")
        {
            // Angle left-up == 315 and finish the code line
            code += "315);";
        }

        // If none are any of the directions, then just sub in the already givin-angle
        else
        {
            code += buttonNameOrNum + ");";
        }
    }

    // Else, default to a regular joystick button
    else
    {
        // Add the current known stuff
        code += "JoystickButton " + buttonVarName + " = new JoystickButton(" + controllerName + ", ";

        if (buttonNameOrNum === "a")
        {
            // If it's button A, that id is 1
            code += "1);";
        }

        else if (buttonNameOrNum === "b")
        {
            // If it's button B, that id is 2
            code += "2);";
        }

        else if (buttonNameOrNum === "x")
        {
            // If it's button X, that id is 3
            code += "3);";
        }

        else if (buttonNameOrNum === "y")
        {
            // If it's button Y, that id is 4
            code += "4);";
        }

        else if (buttonNameOrNum === "lb")
        {
            // If it's button LB, that id is 5
            code += "5);";
        }

        else if (buttonNameOrNum === "rb")
        {
            // If it's button RB, that id is 6
            code += "6);";
        }

        else
        {
            // If none of those then just sub in the givin, hoping it is a num
            code += buttonNameOrNum + ");";
        }
    }

    // The 'return' boxes
    document.getElementById("extraAnsButMap").value = code;
    document.getElementById("answer").value = code

}


function generateBasicFunctionterCode()
{
    // The inputs from the user
    let buttonName = document.getElementById("buttonFuncter").value;
    let functionOnActivate = document.getElementById("functionFuncter").value;
    let functionClassConector = document.getElementById("functionConecter").value.trim();

    // The line of code that we will make
    // Add everything that we know about
    let code = buttonName + ".onTrue(new InstantCommand(() -> ";

    // Test to see if there is a function Class connector
    if (functionClassConector != "")
    {
        // Add the class connecter and a dot at the end
        code += functionClassConector + ".";
    }

    // Finally, add the final function stuff and the final parenthesies (or whatever they are)
    code += functionOnActivate + "()));";

    // Now do the final 'return' stuff
    document.getElementById("answer").value = code;
}

function generateFullFunctiontierCode()
{
    // The inputs from the user
    // Button testing on-ieness
    let buttonName = document.getElementById("extrasButtonFuncter").value;

    // Function on Activate stuff
    let functionOnActive = document.getElementById("extrasFunctionFuncter").value;
    let functionOnActivatePerams = document.getElementById("extrasFunctionPeramsFuncter").value;

    // Function class connector
    let functionClassConector = document.getElementById("extrasClassConnecterFuncter").value;

    // On false function stuff
    let onFalseFunction = document.getElementById("extrasFalseFunctionFuncter").value;
    let onFalsePerams = document.getElementById("extrasFalsePeramsFuncter").value;

    // Button activition stuff
    let buttonActivitionType = document.getElementById("extrasActivateTypeFuncter").value;

    // Our code line that we will add to
    // Clarify the stuff we know (yep thats it)
    let code = buttonName + ".";

    // Test to see what kind of activition it is testing
    // If the string has held in it, so while held
    if (buttonActivitionType.indexOf("held") != -1)
    {
        // Add the while held function and everything we know til then
        code += "whileHeld(new InstantCommand(() -> ";
    }

    // If no held, then just default to a press
    else
    {
        // Add the on true function and everything we know til then
        code += "onTrue(new InstantCommand(() -> ";
    }

    // Then test to see if there is anything inside of function class connector
    // If there is then add that to code
    if (functionClassConector != "")
    {
        code += functionClassConector + ".";
    }

    // Then add the rest of the stuff we know until the onFalse stuff
    code += functionOnActive + "(" + functionOnActivatePerams + ")))";

    // Test to see if there is any on False stuff
    if (onFalseFunction != "")
    {
        // If there is then add everything up until the class connecter crap
        code += ".onFalse(new InstantCommand(() -> ";

        // Test for the class connectar crap
        if (functionClassConector != "")
        {
            code += functionClassConector + ".";
        }

        // Then add the onFalse function and the perams
        code += onFalseFunction + "(" + onFalsePerams + ")))";
    }

    // Finally add the semi-colon here due to not knowing to put it above the onfalse stuff
    code += ";";

    // Do our returny stuff
    document.getElementById("extraAnsFunctier").value = code;
    document.getElementById("answer").value = code
}