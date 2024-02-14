function generateButtonMappingBasic()
{
    // The controller (XBOX) that is used
    let controllerName = document.getElementById("controllerButMap").value;

    // The button creation data
    let buttonVarName = document.getElementById("butVarNameButMap").value;
    let buttonNumber = document.getElementById("buttNumberButMap").value;

    // The return code
    document.getElementById("answer").value = "public final JoystickButton " + buttonVarName + " = new JoystickButton(" + controllerName + ", " + buttonNumber + ");";
}

function generateButtonMappingFull()
{
    // The controller variable (XBOX)
    let controllerName = document.getElementById("extraControllerNumButMap").value;

    // The button creation data
    let buttonVarName = document.getElementById("extraButtonVarNameButMap").value;
    let buttonType = document.getElementById("extraButtonNameButMap").value;

    // The button number
    let buttonNameOrNum = document.getElementById("extrButtonTypeButMap").value;
}