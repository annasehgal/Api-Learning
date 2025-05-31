document.addEventListener('DOMContentLoaded', () => {
  const dogImage = document.getElementById('dogImage');
  const dogButton = document.getElementById('dogButton');

  async function getDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dogImage.src = data.message;
    } catch (error) {
      alert('Failed to fetch doggo 🐾');
      console.error(error);
    }
  }

  dogButton.addEventListener('click', getDogImage);

  getDogImage();
});
