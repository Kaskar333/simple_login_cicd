import requests
import time

getUrl = "https://6a1bf7688858a003817b5dee.mockapi.io/testautomation/userCollection"

def test_getUser():
    response = requests.get(getUrl)
    assert response.status_code == 200
    print(response.json())
    
test_getUser()

