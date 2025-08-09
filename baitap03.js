let btnOpen = document.querySelector('.openModal');
let btnClose = document.querySelector('.closeModal');
let overlay = document.querySelector('.overlay');
btnOpen.onclick = function () {
    overlay.style.display = 'block';
};

btnClose.onclick = function () {
    overlay.style.display = 'none';
};
overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});