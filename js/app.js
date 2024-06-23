$(document).ready(() => {
    $('#burger-menu').click(() => {
        $('#burger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })


    // Carusel config

    let navText = [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoPlayHoverPause: true,
    })


    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoPlayHoverPause: true,
        margin: 15,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 5
            },
            1600: {
                items: 6
            },
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        autoplay: true,
        autoPlayHoverPause: true,
        loop: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            },
        }
    })

    $('.movies-slide-2').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        autoplay: true,
        autoPlayHoverPause: true,
        loop: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            },
        }
    })
})


document.querySelector("#brend").textContent = "</D>"