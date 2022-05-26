/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // ⭐️ Toggle composer:
  $(".arrow").click(function () {
    $("#compose").toggle("slow", function () {});
    $("#error-empty").hide("slow");
    $("#error-exceed").hide("slow");
  });

  // ⭐️ Jump back to the top button:
  $("#back-to-top").hide();

  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".right-panel").hide();
      $("#back-to-top").stop(true, true).fadeIn();
    } else {
      $("#back-to-top").stop(true, true).fadeOut();
      $(".right-panel").show();
    }
  });

  // ⭐️ Protection against XSS:
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // ⭐️ Creates a new tweet and <article> tag
  const createTweetElement = function (data) {
    const {
      user: { name, avatars, handle },
      content: { text },
    } = data;
    let date = new Date(data.created_at);

    let $tweet = $(`
  <article class="tweet">
  <header>
          <div class="user-info">
            <div class="left-side">
              <img class="mini-avatar" src="${avatars}">
              <p class="user">${name}</p>
            </div>
            <p class="handle">${handle}</p>
          </div>
        </header>
        <p class="timeline-tweet-text">${escape(text)}</p>
        <footer>
          <output name="date" id="date">${timeago.format(date)}</output>
          <div id="icons">
            <span>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </span>
          </div>
        </footer>
  
  
  </article>`);
    return $tweet;
  };

  // ⭐️ Adds (render) tweets in the timeline section
  const renderTweets = function (tweets) {
    let container = $(".timeline");
    container.empty();
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      container.prepend($tweet);
    }
  };

  // ⭐️ Submits the new tweet after passing the validation checks:
  $("form").submit(function (event) {
    event.preventDefault();
    let $tweet = $("#tweet-text").serialize();
    const tweetText = $("#tweet-text").val().trim();
    // Checks if the tweet text is empty:
    if (tweetText.length < 1) {
      $("#error-empty").slideDown("slow");
      // Checks if the tweet text over 140 chars:
    } else if (tweetText.length > 140) {
      $("#error-exceed").slideDown("slow");
    }
    // Happy-path:
    else {
      $.ajax("/tweets", { method: "POST", data: $tweet }).then(function () {
        loadTweets();
      });
      // Clears the form after submit:
      $("#tweet-text").val("");
      $("#error-empty").hide("slow");
      $("#error-exceed").hide("slow");
    }
  });

  // ⭐️ Loads the new tweet and calls the renderTweets fn:
  const loadTweets = function () {
    $.get("/tweets").then(function (data) {
      return renderTweets(data);
    });
  };
  loadTweets();

  // 👽 Extra functionality - it changes the header background .png pattern on page refresh:
  const randomBg = function () {
    const images = [
      "https://www.transparenttextures.com/patterns/climpek.png",
      "https://www.transparenttextures.com/patterns/arches.png",
      "https://www.transparenttextures.com/patterns/batthern.png",
      "https://www.transparenttextures.com/patterns/cubes.png",
      "https://www.transparenttextures.com/patterns/black-thread-light.png",
      "https://www.transparenttextures.com/patterns/green-gobbler.png",
      "https://www.transparenttextures.com/patterns/subtle-zebra-3d.png",
      "https://www.transparenttextures.com/patterns/white-diamond.png",
      "https://www.transparenttextures.com/patterns/zig-zag.png",
      "https://www.transparenttextures.com/patterns/climpek.png",
    ];
    const choice = Math.floor(Math.random() * images.length);
    $("#page-top").css("background-image", `url("${images[choice]}")`);
  };
  $("#page-top").on("load", randomBg());

  // 👽 Extra functionality - it changes the header background .png pattern when the tweet button is clicked - re-using randomBg function:
  $("form").submit(randomBg);
});
