function generateButtonMap()
{
    let controller = document.getElementById("controller").value;
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