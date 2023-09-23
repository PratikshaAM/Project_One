const slider = document.querySelector('.hero-slider');
        const slides = document.querySelector('.slides');
        const slideWidth = slider.clientWidth;
        let currentIndex = 0;

        function goToSlide(index) {
            currentIndex = index;
            const translateX = -currentIndex * slideWidth;
            slides.style.transform = `translateX(${translateX}px)`;
        }

        // Automatic slide change every 5 seconds (adjust as needed)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.children.length;
            goToSlide(currentIndex);
        }, 5000);

        // Initialize slider
        goToSlide(currentIndex);