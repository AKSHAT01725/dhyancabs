// ========================================
// DHYAN CAB - SCRIPT.JS
// ========================================


// ========================================
// MOBILE MENU
// ========================================

function toggleMenu() {

    const navWrap = document.querySelector(".nav-wrap");

    if (navWrap) {
        navWrap.classList.toggle("nav-open");
    }

}


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navWrap = document.querySelector(".nav-wrap");

        if (navWrap) {
            navWrap.classList.remove("nav-open");
        }

    });

});


// ========================================
// BOOKING TABS
// ========================================

function setTab(button) {

    document.querySelectorAll(".tab").forEach(function(tab) {

        tab.classList.remove("active");

    });

    button.classList.add("active");

}


// ========================================
// FAQ
// ========================================

function faq(button) {

    const item = button.parentElement;

    item.classList.toggle("open");

    const symbol = button.querySelector("span");

    if (item.classList.contains("open")) {

        symbol.textContent = "−";

    } else {

        symbol.textContent = "+";

    }

}


// ========================================
// BOOKING FORM
// ========================================

const form = document.getElementById("bookingForm");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        // GET FORM VALUES

        const from =
            document.getElementById("from").value.trim();


        const to =
            document.getElementById("to").value.trim();


        const date =
            document.getElementById("date").value;


        const time =
            document.getElementById("time").value;


        const mobile =
            document.getElementById("mobile").value.trim();


        const activeTabElement =
            document.querySelector(".tab.active");


        const activeTab =
            activeTabElement
                ? activeTabElement.textContent.trim()
                : "One Way";


        // ========================================
        // VALIDATION
        // ========================================


        // FROM

        if (from === "") {

            alert("Please enter pickup city.");

            document.getElementById("from").focus();

            return;

        }


        // TO

        if (to === "") {

            alert("Please enter destination city.");

            document.getElementById("to").focus();

            return;

        }


        // DATE

        if (date === "") {

            alert("Please select pickup date.");

            document.getElementById("date").focus();

            return;

        }


        // TIME

        if (time === "") {

            alert("Please select pickup time.");

            document.getElementById("time").focus();

            return;

        }


        // MOBILE

        if (!/^[0-9]{10}$/.test(mobile)) {

            alert("Please enter a valid 10-digit mobile number.");

            document.getElementById("mobile").focus();

            return;

        }


        // ========================================
        // WHATSAPP MESSAGE
        // ========================================

        const message =

            "DHYAN CAB BOOKING\n\n" +

            "Booking Type: " +
            activeTab +

            "\nFrom: " +
            from +

            "\nTo: " +
            to +

            "\nPickup Date: " +
            date +

            "\nPickup Time: " +
            time +

            "\nCustomer Mobile: " +
            mobile;


        // ========================================
        // WHATSAPP URL
        // ========================================

        const whatsappURL =

            "https://wa.me/919727729334?text=" +

            encodeURIComponent(message);


        // OPEN WHATSAPP

        window.open(
            whatsappURL,
            "_blank"
        );


    });

}


// ========================================
// ONLY NUMBERS IN MOBILE NUMBER
// ========================================

const mobileInput =
    document.getElementById("mobile");


if (mobileInput) {

    mobileInput.addEventListener(
        "input",
        function() {

            this.value =
                this.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

        }
    );

}


// ========================================
// PREVENT OLD BOOKING DATES
// ========================================

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    dateInput.setAttribute(
        "min",
        today
    );

}


// ========================================
// PHONE BUTTON
// ========================================

document.querySelectorAll(
    'a[href^="tel:"]'
).forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            console.log(
                "Calling DHYAN CAB..."
            );

        }
    );

});


// ========================================
// WHATSAPP BUTTONS
// ========================================

document.querySelectorAll(
    'a[href*="wa.me"]'
).forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            console.log(
                "Opening DHYAN CAB WhatsApp..."
            );

        }
    );

});


// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

});


// ========================================
// ESC KEY CLOSE MOBILE MENU
// ========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            const navWrap =
                document.querySelector(
                    ".nav-wrap"
                );


            if (navWrap) {

                navWrap.classList.remove(
                    "nav-open"
                );

            }

        }

    }
);


// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    "DHYAN CAB website loaded successfully."
);