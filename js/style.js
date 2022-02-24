$(function () {
    // =============login.html page jquery=============
    // function on email-input feild how they all works
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
    //  function on dropdown menu of language icon
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
    });
    // =============end login.html page jquery=============

    // ============= login-as.html page jquery=============
    // on click image goes to  other card image
    $(".login-card-right").on({
        click: function () {
            var headingText = $(this).find("h6").text();
            var paraHtml = $(this).find("p").html();
            var imgSrc = $(this).find("img").attr("src");
            var cardAttr = $(this).children(".bottom-card-line").attr("class");
            var leftCard = $(".login-card-left");

            leftCard.find("h5").text(headingText);
            leftCard.find("p").html(paraHtml);
            leftCard.children("img").attr("src", imgSrc);
            leftCard.children(".bottom-card-line").attr("class", cardAttr);
            $(this).siblings().show();
            $(this).hide();

        }
    });
    // ============= login-as.html page jquery=============
    // ============= Start passwordless-authmethod.html page jquery=============
    // card effect on click
    $(".card").on({
        click: function () {
            $(this).parents(".passwordless-authmethod-body").children().find(".card").removeClass("card-effect");
            $(this).addClass("card-effect");
        }
    });
    // ============= End passwordless-authmethod.html pagee jquery=============

    // ============= start changepassword.html pagee jquery=============
    //toggle button on off
    $(".toggle-on-button").on({
        click: function () {
            $(this).addClass("bg-white border text-white border-primary").removeClass("text-white");
            $(this).siblings().addClass("bg-primary text-white").removeClass("bg-white border border-primary");
        }
    });
    $(".toggle-off-button").on({
        click: function () {
            $(this).addClass("bg-white border text-white border-primary").removeClass("text-white");
            $(this).siblings().addClass("bg-primary text-white").removeClass("bg-white border border-primary");
        }
    });
    //email dropdown button function
    $(".dropdown-item").on({
        click: function () {
            var textDropdown = $(this).text();
            $(this).parents().siblings(".email-input").val(textDropdown);
        }
    });
    // on click eye icon show and hide password
    $(".show-password").on({
        click: function () {
            var changeType = $(this).siblings(".password-hidden");
            var closeEye = $(this).children();
            closeEye.toggleClass("d-none d-block");
            if (changeType.attr("type") === "password") {
                changeType.attr("type", "text");
            } else {
                changeType.attr("type", "password");
            }
        },
        mouseover: function () {
            $(this).css("cursor", "pointer");
        }
    });
    // validation message on less then 8 number of digits
    $(".form-control").on({
        click: function () {
            var a = $(this).val().length;
            if (a >= 8) {
                $(this).parent().next(".validation-message").addClass("d-none").removeClass("d-block");
            } else {
                $(this).parent().next(".validation-message").removeClass("d-none").addClass("d-block");
            }
        }
    });
    // ============= End chanepassword.html pagee jquery=============
});