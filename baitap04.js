let item =document.querySelectorAll(".item");
item.forEach((el) => {
    el.onmouseover = function() {
        let bgColor = el.getAttribute('id');
        document.body.style.backgroundColor = bgColor
    };
    el.onmouseout = function() {
    document.body.style.backgroundColor = "";
}
} );
