function generateButtonMap()
{
    let controller = document.getElementById("controller").value;
    let varName = document.getElementById("varName").value;
    let button = document.getElementById("button").value

    document.getElementById("result").value = "private final JoystickButton " + varName + " = new JoysickButton(" + controller + ", " + button + ");";
}