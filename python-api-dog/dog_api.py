import requests 

def get_random_dog_image():
    url = "https://dog.ceo/api/breeds/image/random"
    response = requests.get(url)
    data = response.json()
    print("Have a dog (go to URL):", data['message'])

if __name__ == "__main__":
    get_random_dog_image()
