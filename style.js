// ============================================
// ================= get from html ============
// ============================================
const body = document.querySelector("body");
const manis = document.querySelector(".manis");
const pice = document.querySelector(".pice");
const plas = document.querySelector(".plas");
const add_button = document.querySelector('.add-button');
const box_product = document.querySelector(".box-product");
const icon_shoping = document.querySelector(".icon-shoping");
const alert_prodect = document.querySelector(".alert_prodect");
const main_left = document.querySelectorAll(".main_left img");
const hiden_img = document.querySelector(".hiden_img");
const images_all_screen = document.querySelector(".myPath");
let check_btn;
let card_alert = document.querySelector(".card-alert");

// ============================================
// ================= values ===================
// ============================================
pice.value = 1;
console.log(pice.value * 125);

// ============================================
// ================= addEvent =================
// ============================================
manis.addEventListener("click", mains_pice);
plas.addEventListener("click", plas_pice);
add_button.addEventListener("click", add_prodect);
icon_shoping.addEventListener("click", show_prodects);
images_all_screen.addEventListener("click", close_images);
main_left.forEach(img => {
    img.addEventListener("click", images);
});
document.addEventListener("click", closeBoxProductOutsideClick);

// ============================================
// ================= functions =================
// ============================================

function mains_pice() {
    // Decrement the value of pice if greater than 1
    if (pice.value > 1) {
        pice.value = Number(pice.value) - 1;
        pice.innerHTML = pice.value;
    }
}

function plas_pice() {
    // Increment the value of pice
    pice.value = Number(pice.value) + 1;
    pice.innerHTML = pice.value;
    console.log(pice.value);
}

// Function to add a product
function add_prodect() {
    // Create a container div
    const containerDiv = document.createElement("div");
    containerDiv.className = "check_btn";

    // Create the inner elements
    const innerHTML = `
        <div class="checkout">
            <img src="/images/image-product-3-thumbnail.jpg" alt="Product Image">
            <div class="checkout-details">
                <p class="title">Fall Limited Edition Sneakers</p>
                <div class="details-text">
                    <p class="price">$125.00 x <span class="how_many">${pice.value}</span> <span class="original-price">$${pice.value * 125}.00</span></p>
                </div>
            </div>
            <svg class="delet deleteIcon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1-1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
            </svg>
        </div>
        <button class="checkout-button">Checkout</button>
    `;

    // Set the inner HTML of containerDiv
    containerDiv.innerHTML = innerHTML;

    // Append containerDiv to .box-product
    box_product.appendChild(containerDiv);

    // Hide the card alert and show the product alert
    card_alert.style.display = "none";
    alert_prodect.style.display = "block";

    // Reset the pice value
    pice.value = 1;
    pice.innerHTML = 1;

    // Attach the delete functionality to the delete icon
    attachDeleteFunctionality();
}

// Function to attach delete functionality to all delete icons
function attachDeleteFunctionality() {
    const deleteIcons = document.querySelectorAll(".deleteIcon");
    deleteIcons.forEach(icon => {
        icon.addEventListener("click", (event) => {
            const containerDiv = event.target.closest(".check_btn");
            containerDiv.remove();
            card_alert.style.display = "";
            alert_prodect.style.display = "none";

            checkIfBoxEmpty();
        });
    });
}

// Function to check if the box is empty (implement your own logic)
function checkIfBoxEmpty() {
    // Your logic to check if the box is empty
}

// Initial call to attach the delete functionality to any existing elements
attachDeleteFunctionality();

function show_prodects() {
    if (box_product.style.display === "none") {
        box_product.style.display = "block";
    } else {
        box_product.style.display = "none";
    }
}

function images() {
    hiden_img.style.display = "block";
    console.log("hi");
}

function close_images() {
    hiden_img.style.display = "none";
}

function delet_card() {
    if (check_btn) {
        check_btn.style.display = "none";
    }
}

function checkIfBoxEmpty() {
    if (box_product.children.length === 0) {
        alert_prodect.style.display = "none";
        card_alert.style.display = "block";
    }
}

function closeBoxProductOutsideClick(event) {
    const deletecard = document.querySelectorAll(".delet");

    

    if (!box_product.contains(event.target) && !icon_shoping.contains(event.target) && !add_button.contains(event.target)) {
        box_product.style.display = "none";
    }
}