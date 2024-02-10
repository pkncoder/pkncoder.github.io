import requests
import json

file = open("data.json", 'w')

jsonData = requests.get("https://kineticzephyr.onrender.com/periodictable/").json()["data"]

finalDict = {
    "count": "",
    "results": [

    ]
}

total = 0
for i in range(119):
    group = jsonData[i]["xpos"]

    if i == 1:
        valenceElectrons = 2

    elif group <= 2 or group >= 13:
        valenceElectrons = group % 10

    else:
        valenceElectrons = "Not Specified"

    finalDict["results"] += [{"name": jsonData[i]["name"], 
                              "symbol": jsonData[i]["symbol"],
                              "atomic-mass": jsonData[i]["atomic_mass"],
                              "density": jsonData[i]["density"],
                              "category": jsonData[i]["category"],
                              "phase": jsonData[i]["phase"],
                              "atomic-num": i+1,
                              "period": jsonData[i]["period"],
                              "group": jsonData[i]["xpos"],
                              "valence-electrons": valenceElectrons,
                              "electron-configuration": jsonData[i]["electron_configuration"],
                              "shells": jsonData[i]["period"],
                              "melt-point": jsonData[i]["melt"],
                              "boil-point": jsonData[i]["boil"]}]
    total += 1

finalDict["count"] = total

file.write(json.dumps(finalDict, indent=4))