const input = document.querySelector("input[type=range]");
console.log(document.getElementById("box"));

input.addEventListener("change", () => {
    const newSize = input.value;
    document.getElementById("box").style.width = String(newSize) + "px";
    document.getElementById("box").style.height = String(newSize) + "px";
});