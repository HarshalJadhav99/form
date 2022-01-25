function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function() {


    $('.third-button').on('click', function() {

        $('.animated-icon3').toggleClass('open');
    });
});

// window.addEventListener('scroll', (e) => {
//     const nav = document.querySelector('.nav');
//     if (window.pageYOffset > 0) {
//         nav.classList.add("add-shadow");
//     } else {
//         nav.classList.remove("add-shadow");
//     }
// });

// $(window).scroll(function() {
//     if ($(window).scrollTop() >= 30) {
//         $('header').addClass('shadow-header');
//     } else {
//         $('header').removeClass('shadow-header');
//     }
// });

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".navshadow").addClass("active");
    } else {
        $(".navshadow").removeClass("active");
    }
});