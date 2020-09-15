$(document).on("ready", function () {
  $(function () {
    var $a = $(".tabs li");
    $a.click(function () {
      $a.removeClass("active");
      $(this).addClass("active");
    });
  });
});

/* ================================================================================================
=                                 customer say slider   ===================================================================================================*/
$(document).ready(function () {
  $(".customer-saying").slick({
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    //centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
});

/*===================================================================================================                                         scrollbutton
==============================================================================================*/
var btnscroll = $("#top-btn");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btnscroll.addClass("show");
  } else {
    btnscroll.removeClass("show");
  }
});

btnscroll.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
/***********Active A button */
$(document).ready(function () {
  $("nav ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});
