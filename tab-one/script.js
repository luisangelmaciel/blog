$(function() {
  $("nav ul li").click(function() {
    $(".current").removeClass("current");
    $(this).addClass("current");
  });

  // home
  $("nav ul li:eq(0) a").click(function() {
    $("#content").animate({
      left: 0 + "px"
    })
  });
  // portfolio
  $("nav ul li:eq(1) a").click(function() {
    if ($(window).width() > 768) {
      $("#content").animate({
        left: -604 + "px"
      })
    } else {
      $("#content").animate({
        left: -302 + "px"
      })
    }
  });
  // about
  $("nav ul li:eq(2) a").click(function() {
    if ($(window).width() > 768) {
      $("#content").animate({
        left: -1208 + "px"
      })
    } else {
      $("#content").animate({
        left: -604 + "px"
      });
    }
  });
  // contact
  $("nav ul li:eq(3) a").click(function() {
    if ($(window).width() > 768) {
      $("#content").animate({
        left: -1812 + "px"
      })
    } else {
      $("#content").animate({
        left: -906 + "px"
      });
    }
  });
});