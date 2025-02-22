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
    const links = document.querySelectorAll('a[href^="#about"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target element (section)
            const target = document.querySelector(this.getAttribute('href'));

            // Scroll with an offset of 100px (change this value as needed)
            window.scrollTo({
                top: target.offsetTop - 100, // Adjust this value to move it up
                behavior: 'smooth'
            });
        });
    });
});
