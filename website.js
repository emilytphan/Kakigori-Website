document.addEventListener('DOMContentLoaded', function() {
    // Get the hero element
    const hero = document.querySelector('.hero');

    // Array of background image URLs
    const images = [
        './imgs/pic2.jpg',
        './imgs/pic3.jpg',
        './imgs/pic44.jpg',
        './imgs/pic5.jpg'
    ];

    // Set initial background styles (from your CSS)
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundSize = 'cover';
    hero.style.transition = 'background-image 2s ease-in-out'; // Smooth transition for background image

    // Initial index
    let currentIndex = 0;

    // Function to change background images
    function changeBackground() {
        // Update the background image by cycling through the array
        hero.style.backgroundImage = `url('${images[currentIndex]}')`;

        // Cycle through images
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    }

    // Change background every 5 seconds (5000ms)
    setInterval(changeBackground, 3000);

    // Initially set the first background image
    changeBackground();

    const buttonGroup = document.querySelector('.button-group');
    buttonGroup.classList.add('fade-in');
});
