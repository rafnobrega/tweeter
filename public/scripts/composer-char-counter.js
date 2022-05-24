$(document).ready(function () {
  $("textarea").on("input", function (event) {
    // console.log("event:", event);
    const characters = $(this).val();
    const counter = $(this).parent().find(".counter");
    let remaining = 140 - characters.length;
     if (remaining < 0) {
      counter.addClass("counter-negative");
    } else {
      counter.removeClass("counter-negative");
    }
    $(".counter").text(remaining);
  });
});


// https://api.jquery.com/val/

// https://api.jquery.com/parent/#parent-selector

// https://api.jquery.com/find/

// https://api.jquery.com/addclass/

// https://api.jquery.com/removeclass/

// https://api.jquery.com/text/