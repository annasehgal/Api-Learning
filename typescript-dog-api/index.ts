import fetch from 'node-fetch';

interface DogResp {
    message: string;
}

async function getDogImage(): Promise<void> {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data: DogResp = await response.json();
        console.log("Here is a doggo:", data.message);
    } catch(error) {
        console.error('no doggo for you, you are on the #evillist', error);
    }
}

getDogImage();