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
            a.setAttribute('id', 'extra-param-li')
            a.href = 'DnDIData.html?apipath=' + searchParams.get('search') + "/" + data["results"][i]["name"].toLowerCase()
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
    window.location.href = 'DnDIData.html?apipath=' + searchParams.get('search') + "/" + document.getElementById('data-input-box').value
}

function getData() {
    fetch('https://www.dnd5eapi.co/api/' + searchParams.get('apipath'))
    .then(response => response.json())
    .then(data => {
        document.getElementById('dataResultP').innerHTML = JSON.stringify(data, null, 2);
    })
}