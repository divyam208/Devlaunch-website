/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            target / 80;

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.textContent =
                    Math.ceil(current);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target;

            }

        }

        updateCounter();

    });

}


const statsSection =
    document.querySelector(".hero-stats");


const statsObserver =
    new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

            }

        },
        {
            threshold: 0.5
        }
    );


statsObserver.observe(statsSection);


/* =========================
   FAQ ACCORDION
========================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const alreadyActive =
            item.classList.contains("active");


        /* Close all FAQ items */

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

        });


        /* Open selected item */

        if (!alreadyActive) {

            item.classList.add("active");

        }

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 9, 20, 0.94)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        navbar.style.background =
            "rgba(7, 11, 23, 0.72)";

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   CODE WINDOW MOUSE EFFECT
========================= */

const codeWindow =
    document.querySelector(".code-window");


if (codeWindow) {

    codeWindow.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                codeWindow.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            codeWindow.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    codeWindow.addEventListener(
        "mouseleave",
        () => {

            codeWindow.style.transform =
                "perspective(1000px) rotateY(-4deg)";

        }
    );

}


/* =========================
   SMOOTH ACTIVE NAV
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.style.color = "#aeb7d2";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.style.color = "#55c8ff";

        }

    });

});