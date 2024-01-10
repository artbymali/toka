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


const scrollers = document.querySelectorAll(".Scroller__container");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((Scroller) => {
        Scroller.setAttribute("data-animated", true);
        
         const scrollerInner = scroller.querySelectorAll(".Scroller__inner");
         const scrollercontent = Array.from(scrollerInner.children);

         scrollercontent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            console.log(duplicatedItem);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
         })
    })
}