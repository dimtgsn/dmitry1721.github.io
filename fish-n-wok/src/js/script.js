$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]

    });
    let menuItems = $(".menu__item");
    let menuItemsBlocks = $(".menu__item_block");

    $(menuItems).on("click", function () {
        $(".menu__item>.btn_active").removeClass("btn_active");
        $(this.children).addClass("btn_active");
        $(".menu__item_block.item_active").removeClass("item_active");
        $(menuItemsBlocks[$(this).index()]).addClass("item_active");
    })


    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');

    let menuLinks = document.querySelectorAll('.menu__link');

    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        })
    }


    for (let index = 0; index < menuLinks.length; index++) {
        const menuLink = menuLinks[index];
        menuLink.addEventListener("click", function (e) {
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
        });
    }

});