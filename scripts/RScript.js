function openNav() {
    document.getElementById("mySidebar").style.width = "80%";
    document.getElementById("textDiv").style.visibility = "visible";
    document.getElementById("openCloseButton").innerHTML = "<";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "5%";
    document.getElementById("textDiv").style.visibility = "hidden";
    document.getElementById("openCloseButton").innerHTML = ">";
}

function openOrCloseNav()
{
    if (document.getElementById("mySidebar").style.width === "80%")
    {
        closeNav()
    }

    else
    {
        openNav()
    }
}