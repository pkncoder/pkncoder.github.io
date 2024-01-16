const searchParams = new URLSearchParams(window.location.search);

function getData() {
    fetch('https://kineticzephyr.onrender.com/periodictable/')
    .then(response => response.json())
    .then(data => {
        let dataResultArea = document.getElementById('dataResultPre')

        let p = document.createElement('p')

        let valenceElectrons = "";

        if (searchParams.has("protons"))
        {
            if (parseInt(searchParams.get("protons")) === 2)
            {
                valenceElectrons = "2";
            }

            else if ((parseInt(JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"])) <= 2) || (parseInt(JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"])) >= 13))
            {
                valenceElectrons = JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"]) % 10;
            }

            else
            {
                valenceElectrons = "None Spesific";
            }

            let text = document.createTextNode(
                "  Name: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["name"], null, 2).slice(1, -1) + "\n" +
                "  Symbol: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["symbol"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Mass: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["atomic_mass"], null, 2) + "\n" +
                "  Density: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["density"], null, 2) + "\n" +
                "  Category: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["category"], null, 2).slice(1, -1) + "\n" +
                "  Phase: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["phase"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Number: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["number"], null, 2) + "\n" +
                "  Period: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["period"], null, 2) + "\n" +
                "  Group: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["xpos"], null, 2) + "\n" +
                "  Valence Electrons: " + valenceElectrons + "\n" +
                "  Electron Configuration: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["electron_configuration"], null, 2).slice(1, -1) + "\n" +
                "  Shells: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["period"], null, 2) + "\n" +
                "  Melting Point: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["melt"], null, 2) + "\n" +
                "  Boiling Point: " + JSON.stringify(data["data"][parseInt(searchParams.get("protons")) - 1]["boil"], null, 2) + "\n"
                );

            p.appendChild(text);

            dataResultArea.appendChild(p);
        }

        else if (searchParams.has("name"))
        {
            let atomicNum = 0;

            for (var i = 0; i <= 118; i++)
            {
                if (((JSON.stringify(data["data"][i]["name"]).slice(1, -1).toUpperCase()) === searchParams.get("name")))
                {
                    atomicNum = i;
                    break
                }
            }

            if ((atomicNum + 1) === 2)
            {
                valenceElectrons = "2";
            }

            else if ((parseInt(JSON.stringify(data["data"][atomicNum])) <= 2) || (parseInt(JSON.stringify(data["data"][atomicNum]["xpos"])) >= 13))
            {
                valenceElectrons = JSON.stringify(data["data"][atomicNum]["xpos"]) % 10;
            }

            else
            {
                valenceElectrons = "None Spesific";
            }

            let text = document.createTextNode(
                "  Name: " + JSON.stringify(data["data"][atomicNum]["name"], null, 2).slice(1, -1) + "\n" +
                "  Symbol: " + JSON.stringify(data["data"][atomicNum]["symbol"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Mass: " + JSON.stringify(data["data"][atomicNum]["atomic_mass"], null, 2) + "\n" +
                "  Density: " + JSON.stringify(data["data"][atomicNum]["density"], null, 2) + "\n" +
                "  Category: " + JSON.stringify(data["data"][atomicNum]["category"], null, 2).slice(1, -1) + "\n" +
                "  Phase: " + JSON.stringify(data["data"][atomicNum]["phase"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Number: " + JSON.stringify(data["data"][atomicNum]["number"], null, 2) + "\n" +
                "  Period: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Group: " + JSON.stringify(data["data"][atomicNum]["xpos"], null, 2) + "\n" +
                "  Valence Electrons: " + valenceElectrons + "\n" +
                "  Electron Configuration: " + JSON.stringify(data["data"][atomicNum]["electron_configuration"], null, 2).slice(1, -1) + "\n" +
                "  Shells: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Melting Point: " + JSON.stringify(data["data"][atomicNum]["melt"], null, 2) + "\n" +
                "  Boiling Point: " + JSON.stringify(data["data"][atomicNum]["boil"], null, 2) + "\n"
            )

            p.appendChild(text);

            dataResultArea.appendChild(p);
        }

        else if (searchParams.has("symbol"))
        {
            let atomicNum = 0;

            for (var i = 0; i <= 118; i++)
            {
                if (((JSON.stringify(data["data"][i]["symbol"]).slice(1, -1).toUpperCase()) === searchParams.get("symbol")))
                {
                    atomicNum = i;
                    break
                }
            }
            
            if ((atomicNum + 1) === 2)
            {
                valenceElectrons = "2";
            }

            else if ((parseInt(JSON.stringify(data["data"][atomicNum])) <= 2) || (parseInt(JSON.stringify(data["data"][atomicNum]["xpos"])) >= 13))
            {
                valenceElectrons = JSON.stringify(data["data"][atomicNum]["xpos"]) % 10;
            }

            else
            {
                valenceElectrons = "None Spesific";
            }

            let text = document.createTextNode(
                "  Name: " + JSON.stringify(data["data"][atomicNum]["name"], null, 2).slice(1, -1) + "\n" +
                "  Symbol: " + JSON.stringify(data["data"][atomicNum]["symbol"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Mass: " + JSON.stringify(data["data"][atomicNum]["atomic_mass"], null, 2) + "\n" +
                "  Density: " + JSON.stringify(data["data"][atomicNum]["density"], null, 2) + "\n" +
                "  Category: " + JSON.stringify(data["data"][atomicNum]["category"], null, 2).slice(1, -1) + "\n" +
                "  Phase: " + JSON.stringify(data["data"][atomicNum]["phase"], null, 2).slice(1, -1) + "\n" +
                "  Atomic Number: " + JSON.stringify(data["data"][atomicNum]["number"], null, 2) + "\n" +
                "  Period: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Group: " + JSON.stringify(data["data"][atomicNum]["xpos"], null, 2) + "\n" +
                "  Valence Electrons: " + valenceElectrons + "\n" +
                "  Electron Configuration: " + JSON.stringify(data["data"][atomicNum]["electron_configuration"], null, 2).slice(1, -1) + "\n" +
                "  Shells: " + JSON.stringify(data["data"][atomicNum]["period"], null, 2) + "\n" +
                "  Melting Point: " + JSON.stringify(data["data"][atomicNum]["melt"], null, 2) + "\n" +
                "  Boiling Point: " + JSON.stringify(data["data"][atomicNum]["boil"], null, 2) + "\n"
            )

            p.appendChild(text);

            dataResultArea.appendChild(p);
        }
    })
}

function setupInputPage()
{
    if (searchParams.get("search_with") === "protons")
    {
        document.getElementById("input").placeholder = "Any amount of Protons or Atomic Num. (1 to 119)";
    }

    else if (searchParams.get("search_with") === "name")
    {
        document.getElementById("input").placeholder = "Any element name. Ex. Helium";
    }

    else if (searchParams.get("search_with") === "symbol")
    {
        document.getElementById("input").placeholder = "Any element symbol. Ex. He"
    }
}

function gotoUrl()
{
    if (searchParams.get("search_with") === "protons")
    {
        window.location.href = "ESData.html?protons=" + document.getElementById("input").value;
    }

    else if (searchParams.get("search_with") === "name")
    {
        window.location.href = "ESData.html?name=" + document.getElementById("input").value.toUpperCase();
    }

    else if (searchParams.get("search_with") === "symbol")
    {
        window.location.href = "ESData.html?symbol=" + document.getElementById("input").value.toUpperCase();
    }
}