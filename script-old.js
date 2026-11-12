const bookingButton = document.getElementById("bookingButton");
const bookingMessage = document.getElementById("bookingMessage");

bookingButton.addEventListener("click", function() {
    bookingMessage.textContent =
        "Спасибо! Вы выбрали GlowSpace!";
    bookingMessage.style.color = "#96617e";
});

console.log("GlowSpace успешно загружен!");
