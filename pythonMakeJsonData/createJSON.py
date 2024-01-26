import requests
import json

file = open("oldData.json", 'w')

file.write(json.dumps(requests.get("https://kineticzephyr.onrender.com/periodictable/").json(), indent=4))