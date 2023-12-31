const searchParams = new URLSearchParams(window.location.search);

async function setInputExtraLis(url)
{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data["count"]; i++)
        {
            var ul = document.getElementById("data-holder");
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.appendChild(document.createTextNode(data["results"][i]["name"]));
            a.href = 'DnDIData.html?apipath=' + searchParams.get('search') + "/" + formatForApi(data["results"][i]["name"])
            li.appendChild(a)
            ul.appendChild(li);
        }
    })
    
}

function setupInputPage() {
    document.getElementById("data-input-box").placeholder = "Input " + searchParams.get('search');
    
    setInputExtraLis('https://www.dnd5eapi.co/api/' + searchParams.get('search'));
}

function searchForUrl() {
    window.location.href = 'DnDIData.html?apipath=' + searchParams.get('search') + "/" + formatForApi(document.getElementById('data-input-box').value)
}

function getData() {
    fetch('https://www.dnd5eapi.co/api/' + formatForApi(searchParams.get('apipath')))
    .then(response => response.json())
    .then(data => {
        document.getElementById('dataResultP').innerHTML = JSON.stringify(data, null, 2);
    })
}

function formatForApi(unformattedString) {
    unformattedString = unformattedString.toLowerCase()
    unformattedString = unformattedString
    unformattedString = unformattedString.replace(', +1, +2, or +3', '').replace(', +1', '-1').replace(', +2', '-2').replace(', +3', '-3')
    unformattedString = unformattedString.replace(' × ', 'x').replace('(', '').replace(')', '').replaceAll(' ft.', '')
    unformattedString = unformattedString.replace(',', '').replace(' form', '').replace("'", '')
    unformattedString = unformattedString.replace(':', '')
    try{
        if (unformattedString.match(/\//g).length > 1)
        {
            let firstSpot = unformattedString.indexOf('/')

            let partTwo = unformattedString.substring(firstSpot + 1)

            partTwo = partTwo.replace('/', '-')

            unformattedString = unformattedString.substring(0, firstSpot + 1) + partTwo
        }
    }

    catch (err)
    {
        
    }

    let formattedString = unformattedString.replaceAll(' ', '-')
    return formattedString
}