$(function () {
    // =============login.html page jquery=============
    // function on email-input feild
    $(".email-input").on({
        focus: function () {
            $(this).siblings(".basic-addon").addClass("primary-border");
        },
        blur: function () {
            $(this).siblings(".basic-addon").removeClass("primary-border");
        },
        keypress: function () {
            $(".password-input-button").addClass("btn-primary").removeClass("bg-gray-300");
        }
    });
    //   function on dropdown menu of language icon
    $(".list-able").on({
        click: function () {
            $(this).removeClass("opacity-50").addClass("opacity-100");
            $(this).children(".check-tick").toggleClass("d-none");
            $(this).siblings().children(".check-tick").addClass("d-none");
            $(this).siblings().addClass("opacity-50").removeClass("opacity-100");
        }
    });
    // Register-menu
    $(".register-list").on({
        click: function () {
            $(this).children(".check-tick").toggleClass("d-none");
            $(this).siblings().children(".check-tick").addClass("d-none");
        }
    })
    // =============end login.html page jquery=============

    // ============= login-as.html page jquery=============
    $(".login-card-right").on({
        click: function () {
            var a = $(this).find("h6").text();
            var b = $(this).find("p").html();
            var c = $(this).find("img").attr("src");
            var d = $(this).children(".bottom-card-line").attr("class");
            var leftCard = $(".login-card-left");

            leftCard.find("h5").text(a);
            leftCard.find("p").html(b);
            leftCard.children("img").attr("src", c);
            leftCard.children(".bottom-card-line").attr("class", d);
            $(this).siblings().show();
            $(this).hide();

        }
    })
    // ============= login-as.html page jquery=============
});