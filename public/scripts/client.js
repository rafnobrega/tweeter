/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@Descartegram",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1261113959088,
    },
  ];

  const renderTweets = function (tweets) {
    let container = $(".timeline");
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      container.append($tweet); // might want to change to prepend
    }
    // gotta empty the tweet container
  };

  const createTweetElement = function (data) {
    const {
      user: { name, avatars, handle },
      content: { text },
    } = data;
    let date = new Date(data.created_at);
    date = date.toDateString();

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
          <output name="date" id="date">${date}</output>
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

  renderTweets(data);

  $("form").submit(function (event) {
    event.preventDefault();
    let $tweet = $("#tweet-text").serialize();
    console.log("MY TWEET:", $tweet);
    $.ajax("/tweets", { method: "POST", data: $tweet });
  });
});
