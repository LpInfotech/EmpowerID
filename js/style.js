$(function () {
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
});