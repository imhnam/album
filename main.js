// JavaScript code to load images and wishes dynamically
document.addEventListener("DOMContentLoaded", function () {
    // Array of image sources
    const images = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg"
    ];

    // Get the gallery section
    const gallery = document.getElementById("gallery");

    // Loop through the images and create img elements
    images.forEach(function (imageSrc) {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        gallery.appendChild(imgElement);
    });

    // Array of wishes
    const wishes = ["Yêu em là đúng, không sai", "Lời này là một, không hai"];

    // Get the wishes section
    const wishesSection = document.getElementById("wishes");

    // Loop through the wishes and create p elements
    wishes.forEach(function (wishText) {
        const pElement = document.createElement("p");
        pElement.textContent = wishText;
        wishesSection.appendChild(pElement);
    });
});
