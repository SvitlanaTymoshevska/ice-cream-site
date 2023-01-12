const slickDots = document.querySelector(".slick-dots");
slickDots.addEventListener("click", onclick);

function onclick(e) { 
    if (e.target.classList.contains("current")) {
        return;
    }

    const prevCurrentButton = slickDots.querySelector(".current");
    const prevCurrentReview = document.querySelector(".reviews__slide");
    const currentButtonNumber = e.target.dataset.button;
    const currentReview = document.querySelector(`[data-review="${currentButtonNumber}"]`);
 
    prevCurrentButton.classList.replace("current", "slick-dots__slide");
    e.target.classList.replace("slick-dots__slide", "current");

    prevCurrentReview.classList.replace("reviews__slide", "visually-hidden");
    currentReview.classList.replace("visually-hidden", "reviews__slide");
};