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