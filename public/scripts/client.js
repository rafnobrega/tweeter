/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

const createTweetElement = function (dataObj) {
  let name = dataObj["user"]["name"];
  let avatars = dataObj["user"]["avatars"];
  let handle = dataObj["user"]["handle"];
  let text = dataObj["content"]["text"];
  let date = new Date(dataObj["created_at"]);
  date = date.toDateString();

  const $tweet = $(`
  <article class="tweet">
  <header>
          <div class="user-info">
            <div class="left-info">
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



const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.timeline').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});