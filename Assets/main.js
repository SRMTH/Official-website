var loader = document.getElementById("preloader");

function myFunction() {
  loader.style.display = "none";
}

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");
  $({ countNum: $this.text() }).animate(
    { countNum: countTo },
    {
      duration: 10000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    }
  );
});

var btn = $("#button");

$(window).scroll(function () {
  $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show");
}),
  btn.on("click", function (e) {
    e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "300");
  });

// function for loading navbar and footer into this page
$(function () {
  $("[data-load]").each(function () {
    $(this).load($(this).data("load"), function () {});
  });
});
