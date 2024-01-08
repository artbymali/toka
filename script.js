const nav = document;
let menu = nav.querySelector("header");
let isScrolling = false;

function throttleScroll() {
    if (!isScrolling) {
        requestAnimationFrame(function() {
            if (window.scrollY >= 30) {
                menu.classList.add("scroll");
            } else {
                menu.classList.remove("scroll");
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
}

window.addEventListener("scroll", throttleScroll);

menu.style.transition = 'background-color 0.3s ease'; 