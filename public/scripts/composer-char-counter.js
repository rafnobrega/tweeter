$(document).ready(function () {
  $("textarea").on("input", function (event) {
    const chars = $(this).val();
    const counter = $(this).parent().find(".counter");
    let remaining = 140 - chars.length;
    counter.text(remaining);
    if (remaining < 0) {
      counter.addClass("counter-negative");
    } else {
      counter.removeClass("counter-negative");
    }
  });
});
