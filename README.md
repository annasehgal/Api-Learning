# Note: I built this to learn and have some fun
## Python
### dog_api.py
- Request library is to make HTTP requests (API calls are made using HTTP requests).
- We have a function which can be used again, within that we have: 
    * the variable set to hold data, in this case it is a url is set as the variable, and it returns a random dog impage URL.
    * .get() for requests is a way to use HTTP GET request. In this Dog API returns data in JSON format, and saves it in response object.
    * .json() on the response object to parse the JSON format of the API.
- Finally we print the response.
    * data['message'], gets the message key from the JSON rsponse, which is the URL of dog image.

## new breed_and_image.py
- Updated here, it gets the image URL, and extract the breed name.
### new breed_and_image.py
- Updated here, it gets the image URL, and extract the breed name.

## JavaScript
### script.js
- async function is for functions which have to fetch data or wait for events, easy to manage.
- try-catch blocks are for exceptions and error that might occur during the execution of code.
- alert(..) functions shows a message, pop up and user has to press OK, if there is an error.
- fetch is used in this case with await
