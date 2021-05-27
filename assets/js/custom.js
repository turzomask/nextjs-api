$(".header-courosel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

$(".product-courosel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 6,
        },
    },
});

$(".news-and-events").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        },
    },
});

$(".company-profile").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 5,
        },
    },
});

$(".board-of-directors").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        },
    },
});


const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

$(document).ready(function() {

    var mixer = mixitup(".catch");


});