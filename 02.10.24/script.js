const popytSlider = document.getElementById("popytSlider");
const pabloSlider = document.getElementById("pabloSlider");
const animatedBox = document.getElementById("box");
const cards = document.querySelectorAll(".card")

popytSlider.addEventListener("input", () => {
    const newSize = popytSlider.value;
    box.style.width = String(newSize) + "px";
    box.style.height = String(newSize) + "px";
});

cards.forEach(card => {
    pabloSlider.addEventListener("input", () => {
        const newSize = pabloSlider.value;
        card.style.width = String(newSize) + "px";
        card.style.height = String(newSize) + "px";
    });
});