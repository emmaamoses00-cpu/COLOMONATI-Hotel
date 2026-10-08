// ===============================
// COLOMONATI HOTEL JAVASCRIPT
// ===============================


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// CLOSE MOBILE MENU AFTER CLICKING LINK
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// BOOKING AVAILABILITY
const checkAvailability = document.getElementById("checkAvailability");

checkAvailability.addEventListener("click", () => {

    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guests = document.getElementById("guests").value;

    if (!checkIn || !checkOut) {
        alert("Please select your check-in and check-out dates.");
        return;
    }

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (endDate <= startDate) {
        alert("Check-out must be after check-in.");
        return;
    }

    alert(
        `Great! Your stay request for ${guests} guest(s) has been received.\n\n` +
        `Check-in: ${checkIn}\n` +
        `Check-out: ${checkOut}\n\n` +
        `This is a demo booking system.`
    );
});


// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Thank you, ${name}. Your message has been received.`;

    formMessage.style.color = "#9b7a3e";

    contactForm.reset();
});


// SET MINIMUM CHECK-IN DATE TO TODAY
const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayString = `${year}-${month}-${day}`;

checkInInput.min = todayString;
checkOutInput.min = todayString;


// WHEN CHECK-IN CHANGES,
// MAKE CHECK-OUT MINIMUM THE CHECK-IN DATE
checkInInput.addEventListener("change", () => {

    if (checkInInput.value) {
        checkOutInput.min = checkInInput.value;

        if (
            checkOutInput.value &&
            checkOutInput.value <= checkInInput.value
        ) {
            checkOutInput.value = "";
        }
    }
});


// SIMPLE SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".room-card, .experience-card, .gallery-item, .dining-content, .intro-text"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }
        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);
});