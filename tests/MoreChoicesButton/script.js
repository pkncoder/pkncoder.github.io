function expandDiv()
{
    let div = document.getElementById("extras-div");

    if (div.style.visibility === "hidden")
    {
        div.style.visibility = "visible";
    }

    else
    {
        div.style.visibility = "hidden";
    }
}