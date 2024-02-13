const divIds = ["one", "two"]

function expandDiv(divNumber)
{
    let div = document.getElementById("extras-div-" + divIds[divNumber - 1]);

    if (div.style.visibility === "visible")
    {
        div.style.visibility = "hidden";
        div.style.transform = "translate(-50%, -200%)"
    }

    else
    {
        div.style.visibility = "visible";
        div.style.transform = "translate(-50%, -50%)"
    }
}