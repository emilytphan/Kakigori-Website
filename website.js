document.addEventListener('DOMContentLoaded', function() {
    // Get the hero element
    const hero = document.querySelector('.hero');

    // Array of background image URLs
    const images = [
        './imgs/pic2.jpg',
        './imgs/pic333.png',
        './imgs/pic444.png',
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
// Preload all images first
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

    // Change background every 3 seconds (3000ms)
    setInterval(changeBackground, 3000);

    // Initially set the first background image
    changeBackground();

    // Get the button2 element for fade-in on scroll
    const button2 = document.querySelector('.cta-button2');

    // Create an intersection observer to detect when the button comes into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to make the button fade in
                button2.classList.add('visible');
                // Once the button is visible, stop observing it
                observer.unobserve(button2);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the button is visible
    });

    // Start observing the button
    observer.observe(button2);

    // Smooth scrolling with offset (for About Us and Contact links)
    document.querySelectorAll('a[href^="#about"], a[href^="#contact"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
