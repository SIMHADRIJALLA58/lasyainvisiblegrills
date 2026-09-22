AOS.init({
        duration: 900,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });




document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".bg-hero-slide");
    const progressItems = document.querySelectorAll(".bg-progress-item");

    const nextBtn = document.querySelector(".bg-next");
    const prevBtn = document.querySelector(".bg-prev");

    let currentSlide = 0;
    let autoSlide;

    const slideDuration = 3000;


    /* =========================
       SHOW SLIDE
    ========================= */

    function showSlide(index) {

        // Remove active from all slides
        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        // Remove active from progress bars
        progressItems.forEach(function (item) {
            item.classList.remove("active");
        });


        // Add active to current slide
        slides[index].classList.add("active");

        // Add active to current progress
        if (progressItems[index]) {
            progressItems[index].classList.add("active");
        }

        currentSlide = index;
    }


    /* =========================
       NEXT SLIDE
    ========================= */

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }


    /* =========================
       PREVIOUS SLIDE
    ========================= */

    function previousSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    }


    /* =========================
       START AUTO SLIDER
    ========================= */

    function startAutoSlider() {

        clearInterval(autoSlide);

        autoSlide = setInterval(function () {
            nextSlide();
        }, slideDuration);
    }


    /* =========================
       NEXT BUTTON
    ========================= */

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            nextSlide();
            startAutoSlider();

        });

    }


    /* =========================
       PREVIOUS BUTTON
    ========================= */

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            previousSlide();
            startAutoSlider();

        });

    }


    /* =========================
       INITIAL SLIDE
    ========================= */

    showSlide(0);

    startAutoSlider();


    /* =========================
       MOBILE SWIPE
    ========================= */

    const hero =
        document.querySelector(".premium-bg-hero");

    let touchStartX = 0;
    let touchEndX = 0;


    if (hero) {

        hero.addEventListener("touchstart", function (e) {

            touchStartX =
                e.changedTouches[0].screenX;

        }, { passive: true });


        hero.addEventListener("touchend", function (e) {

            touchEndX =
                e.changedTouches[0].screenX;

            const swipeDistance =
                touchStartX - touchEndX;


            if (swipeDistance > 50) {

                // Swipe left
                nextSlide();
                startAutoSlider();

            }
            else if (swipeDistance < -50) {

                // Swipe right
                previousSlide();
                startAutoSlider();

            }

        }, { passive: true });

    }

});









document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-new-item");

    faqItems.forEach(function (item) {

        const button = item.querySelector(".faq-new-question");

        button.addEventListener("click", function () {

            const alreadyOpen = item.classList.contains("active");

            faqItems.forEach(function (faq) {
                faq.classList.remove("active");
            });

            if (!alreadyOpen) {
                item.classList.add("active");
            }

        });

    });


    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".faq-new-content, .faq-new-visual"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("faq-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("faq-hidden");

        revealObserver.observe(element);

    });

});






document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       WHATSAPP FORM
    ========================================= */

    const form = document.getElementById("modernWhatsappForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("modernName").value.trim();

            const phone =
                document.getElementById("modernPhone").value.trim();

            const service =
                document.getElementById("modernService").value;

            const message =
                document.getElementById("modernMessage").value.trim();


            if (!name || !phone || !service) {

                alert("Please fill in your name, phone number and service.");

                return;
            }


            if (!/^[0-9]{10}$/.test(phone)) {

                alert("Please enter a valid 10-digit phone number.");

                return;
            }


            const whatsappMessage =
`Hello,

I would like to enquire about your services.

Name: ${name}
Phone: ${phone}
Service: ${service}
Requirement: ${message || "Please share the details."}

Thank you.`;


            const whatsappNumber = "919900006948";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(whatsappURL, "_blank");

        });

    }


    /* =========================================
       SCROLL ANIMATION
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".contact-visual, .contact-form-side"
        );


    const animationObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "contact-show"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(function (element) {

        animationObserver.observe(element);

    });


    /* =========================================
       PHONE NUMBER - ONLY NUMBERS
    ========================================= */

    const phoneInput =
        document.getElementById("modernPhone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

            }
        );

    }

});