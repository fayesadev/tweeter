/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
  const username = tweet.user.name;
  // const handle = tweet.user.avatars;
  const avatar = tweet.user.avatars;
  const content = tweet.content.text;
  const timeStamp = tweet.created_at;

  const markup = `
    <article class="tweet">
      <header class="tweet">
      <div class="profile">
        <i class="fa-solid fa-user fa-2xl"></i>
        <h4 class="username">Elon Musk</h4>
      </div>
      </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <footer>
        <p>10 days ago</p>
        <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>`

  return avatar
  // $(`<article class="tweet">Hello world</article>`);
}

// Test / driver code (temporary). Eventually will get this from the server.
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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like

// const renderTweets = function(tweetArr) {

// }