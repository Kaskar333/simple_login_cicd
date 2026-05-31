import requests
import time

getUrl = "https://6a1bf7688858a003817b5dee.mockapi.io/testautomation/userCollection"
postUrl = "https://6a1bf7688858a003817b5dee.mockapi.io/testautomation/userCollection"
payload = {
    "name": "Pytest Mertz",
    "email": "pytest@hotmail.com",
    "phone": "(453) 703-0753 x0538",
    "address": "Sandhurst"
  }

def test_getUser():
    response = requests.get(getUrl)
    assert response.status_code == 200
    print(response.json())

def test_postUser():
    response = requests.post(postUrl, data=payload)
    assert response.status_code == 201
    data = response.json()
    if data["name"] == payload["name"]:
        print("The test was a success!")

test_postUser()
time.sleep(5)
test_getUser()
