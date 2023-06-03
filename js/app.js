(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    var scrollContainer = document.querySelector(".block__card");
    var isScrolling = false;
    scrollContainer.addEventListener("wheel", (function(event) {
        event.preventDefault();
        var scrollAmount = event.deltaY * 3;
        var newScrollLeft = scrollContainer.scrollLeft + scrollAmount;
        isScrolling = true;
        scrollContainer.scrollTo({
            left: newScrollLeft,
            behavior: "auto"
        });
    }));
    var items = document.querySelectorAll(".parallax");
    function updateParallax() {
        var scrollPosition = scrollContainer.scrollLeft;
        items.forEach((function(item) {
            var speed = parseFloat(item.dataset.parallaxSpeed);
            var offsetX = scrollPosition * speed;
            item.style.transform = "translateX(" + offsetX + "px)";
        }));
        if (isScrolling) {
            isScrolling = false;
            return;
        }
        window.requestAnimationFrame(updateParallax);
    }
    scrollContainer.addEventListener("scroll", (function() {
        window.requestAnimationFrame(updateParallax);
    }));
    window["FLS"] = true;
    isWebp();
})();