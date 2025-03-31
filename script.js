document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let lastScroll = window.scrollY;

    function checkScroll() {
        let scrollPos = window.scrollY;
        let windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;

            if (cardPosition < windowHeight - 100) {
                card.classList.add("show");
            } else if (scrollPos < lastScroll) {
                card.classList.remove("show"); // Reverse animation when scrolling up
            }
        });

        lastScroll = scrollPos;
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check
});
