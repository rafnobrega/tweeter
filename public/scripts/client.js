/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const createTweetElement = function (data) {
    const {
      user: { name, avatars, handle },
      content: { text },
    } = data;
    let date = new Date(data.created_at);
    // date = date.toDateString();

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
        <p class="timeline-tweet-text">${text}</p>
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

  const renderTweets = function (tweets) {
    let container = $(".timeline");
    container.empty();
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      container.prepend($tweet);
    }
  };

  $("form").submit(function (event) {
    event.preventDefault();
    let $tweet = $("#tweet-text").serialize();
    const tweetText = $("#tweet-text").val().trim();
    // console.log("MY TWEETTEXT:", tweetText.val());
    // console.log("MY TWEET:", typeof $tweet);
    
    if (tweetText.length < 1)  {
      return alert("Your message is empty. Please try again.");
    } else if (tweetText.length > 140) {
      return alert("Your message exceeds the 140 characters limit.");
    } else {
      $.ajax("/tweets", { method: "POST", data: $tweet }).then(function () {
        loadTweets();
      });
    }
  });

  const loadTweets = function () {
    $.get("/tweets").then(function (data) {
      console.log("Success! loadTweets was called.");
      return renderTweets(data);
    });
  };
  loadTweets();
});
