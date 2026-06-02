


// MENU TOOGLE OPEN

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e){
        if(window.innerWidth <= 768){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});


//MENU TOOGLE CLOSE

// COUTNER OPEN JS

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);
        }
        else{
            counter.innerText = target;
        }
    }

    updateCounter();
});

// SERVICE PAGE MEIN CLEINTS REVIEW 5 STAR OPEN JS

var swiper = new Swiper(".clientReviewSwiper", {

    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".client-next",
        prevEl: ".client-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }
    }

});

// SERVICE PAGE MEIN CLEINTS REVIEW 5 STAR OPEN JS

// CLIENTS REVEIW OPEN JS

document.querySelectorAll('.gfx-card').forEach(card => {

    const qtyInput = card.querySelector('input');
    const priceText = card.querySelector('.gfx-price').innerText;
    const totalBox = card.querySelector('.total');

    // ₹300 / Design se 300 nikalna
    const price = parseInt(priceText.replace(/[^\d]/g, ''));

    function updateTotal() {
        const qty = parseInt(qtyInput.value) || 1;
        const total = price * qty;

        totalBox.innerHTML = "Total: ₹" + total;
    }

    qtyInput.addEventListener('input', updateTotal);

    updateTotal();
});

// WEB-DESIGNER OPEN
// =========================
// WDP PACKAGE ORDER BUTTON
// =========================

document.querySelectorAll(".wdp-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".wdp-card");

        const service = card.querySelector("h3").innerText;
        const qty = card.querySelector(".wdp-qty").value;
        const total = card.querySelector(".wdp-total").innerText;

        const message =
`Hello, I want to order:

Service: ${service}
Quantity: ${qty}
${total}`;

        window.open(
            `https://wa.me/91YOURNUMBER?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});


// =========================
// WDP PRICE CALCULATOR OPEN
// =========================

document.querySelectorAll(".wdp-card").forEach(card => {

    const priceElement = card.querySelector(".wdp-price");
    const qtyInput = card.querySelector(".wdp-qty");
    const totalElement = card.querySelector(".wdp-total");

    // Price text se number nikalna
    const price = parseInt(
        priceElement.innerText.replace(/[^\d]/g, "")
    );

    function updateTotal() {

        const qty = parseInt(qtyInput.value) || 1;

        totalElement.innerText =
            "Total: ₹" + (price * qty).toLocaleString("en-IN");

    }

    qtyInput.addEventListener("input", updateTotal);

    updateTotal();

});

// =========================
// WDP PRICE CALCULATOR CLOSE
// =========================


// CONTACT SEND MESSAGE BUTTON 

function sendToWhatsApp(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let project = document.getElementById("project").value;
    let message = document.getElementById("message").value;

    let url =
    "https://wa.me/918882374164?text="
    + "Name: " + name + "%0A"
    + "Email: " + email + "%0A"
    + "Project: " + project + "%0A"
    + "Message: " + message;

    window.open(url, "_blank");
}
