import requests

def random_dog_image_and_breed():
    url = "https://dog.ceo/api/breeds/image/random"
    response = requests.get(url)
    print(response)
    data = response.json()
    #Get the URL of image
    image_url = data['message']
    print("Here is a URL for you: ", image_url)

    #Breed name from the URL -_-
    breed_extract = image_url.split("/breeds/")[1].split("/")[0]
    breed = breed_extract.replace("-", " ").title()
    print("This Dog breed is: ", breed)


if __name__ == "__main__":
    random_dog_image_and_breed()
