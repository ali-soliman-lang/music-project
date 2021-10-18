$(document).ready(function () {
  // header height

  $(function () {
    $(".header").height($(window).height());

    $(window).resize(function () {
      $(".header").height($(window).height());
    });
  });

  // loading page

  $(window).on("load", function () {
    $(".loading").fadeOut(3000);
  });

  // navbar scroll color

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 110) {
      $("nav").css({
        background: "#051024",
        padding: "10px 0",
        "box-shadow": "5px 0 5px #000",
      });
    } else {
      $("nav").css({
        background: "transparent",
        padding: "25px 0",
        "box-shadow": "none",
      });
    }
  });
  if ($(window).scrollTop() >= 110) {
    $("nav").css({
      background: "#051024",
      padding: "10px 0",
      "box-shadow": "5px 0 5px #000",
    });
  } else {
    $("nav").css({
      background: "transparent",
      padding: "25px 0",
      "box-shadow": "none",
    });
  }

  // smooth scroll

  $("nav li a").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 80,
      },
      1000
    );
  });

  // add active class to links

  $("nav li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  $(window).scroll(function () {
    $("section").each(function () {
      if ($(window).scrollTop() + 100 >= $(this).offset().top) {
        var sectionID = $(this).attr("id");
        $("nav li a").removeClass("active");
        $('nav li a[data-scroll = "' + sectionID + '"]').addClass("active");
      }
    });

    // button scroll up

    if ($(window).scrollTop() >= 500) {
      $("#go-up").fadeIn(1000);
    } else {
      $("#go-up").fadeOut(1000);
    }
  });

  // click to scroll top

  $(".up").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // nice scroll

  $(function () {
    $("body").niceScroll({
      cursorcolor: "#ff275e",
      cursorborder: "none",
      cursorwidth: "8px",
      zindex: "999999",
    });
  });

  // Swiper JS

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 6,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
