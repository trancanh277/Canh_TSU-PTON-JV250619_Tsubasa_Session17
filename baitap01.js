let text = document.getElementById("myText");
let btnHide = document.getElementById("btnHide");
let btnShow = document.getElementById("btnShow");
btnHide.addEventListener("click", function() {
    text.style.display = "none";
});
btnShow.addEventListener("click", function() {
    text.style.display = "block";
});
