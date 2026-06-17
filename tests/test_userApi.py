import requests

getUrl = "https://6a1bf7688858a003817b5dee.mockapi.io/orderdata/userCollection"

def test_getUser():
    response = requests.get(getUrl)
    
test_getUser()

