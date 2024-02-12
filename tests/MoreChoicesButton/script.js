function expandDiv()
{
    let div = document.getElementById("extras-div");

    if (div.style.visibility === "hidden")
    {
        div.style.visibility = "visible";
        div.style.transform = "translate(-50%, -50%)"
    }

    else
    {
        div.style.visibility = "hidden";
        div.style.transform = "translate(-50%, -200%)"
    }
}

function setupEventListeners()
{
    window.addEventListener("keypress", function(event) {
        
        if (event.key === "x")
        {
            if (this.document.getElementById("extras-div").style.visibility === "visible")
            {
                expandDiv();
            }
        }
    });
}