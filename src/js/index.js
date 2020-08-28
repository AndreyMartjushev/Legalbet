if ($(window).width() > 917) {
    $(".header__search_form__open_serch").click(() => {
        $(".header__support, .header__lk").toggleClass("hide");
        $(".header__search_form").toggleClass("open");
    })
} else {
    $(".header__search_form__open_serch").click(() => {
        $(".header__search_form").toggleClass("open");
    })
}
$(".header__open_btn_menu").click(() => {
    $(".header__open_btn_menu").addClass("open");
    $(".overlay").addClass("active");
    $("body").addClass("open_menu");
    $(".header__wrapp_nav").addClass("open");
})
$(".overlay").click(() => {
    $(".overlay").removeClass("active");
    $("body").removeClass("open_menu");
    $(".header__wrapp_nav").removeClass("open");
    $(".header__open_btn_menu").removeClass("open");
})
$(".other_nav__btn_open").click(() => {
    $(".other_nav__btn_open").toggleClass("active");
    $(".other_nav__list").toggleClass("active");
})
$(".other_nav__link").click(function (e) {
    e.preventDefault()
    $(".other_nav__link").removeClass("active");
    $(this).addClass("active");
    $(".other_nav__btn_open").removeClass("active");
    $(".other_nav__list").removeClass("active");
})