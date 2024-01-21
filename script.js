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

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".Scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        const fragment = document.createDocumentFragment();

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            fragment.appendChild(duplicatedItem);
        });

        scrollerInner.appendChild(fragment);
    });
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },grabCursor: true,
  });