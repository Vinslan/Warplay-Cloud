let slidertrack = document.getElementById("slider__track");
let coutSlide = document.getElementsByClassName('slide').length;
let sliderSize = -1328;
let time;

scrollNext();

function autoSlide() {
    time = setTimeout(scrollNext, 8000)
}


function scrollNext() {
    slidertrack.style.transform = "translateX(" + sliderSize + "px)";
    sliderSize -= 1328;

    if (sliderSize == (-coutSlide * 1328) - 1328) {
        slidertrack.style.transform = "translateX(0px)";
        sliderSize = -1328;
    }

    autoSlide();
}


$(window).on("scroll", function() {
    var scrolled = $(this).scrollTop();
    if (scrolled > 10) {
        $('.content').addClass('scrolled');
    }
    if (scrolled <= 10) {
        $('.content').removeClass('scrolled');
    }
});