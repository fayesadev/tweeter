/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  const createTweetElement = function(tweet) {
    const username = tweet.user.name;
    const handle = tweet.user.handle;
    const avatar = tweet.user.avatars;
    const content = tweet.content.text;
    const timeStamp = Date (tweet.created_at);
  
    const markup = `
      <article class="tweet">
        <header class="tweet-header">
          <div class="profile">
            <image src="${avatar}">
            <h4 class="username">${username}</h4>
          </div>
          <h4 class="handle">${handle}</h4>
        </header>
          <p>${content}</p>
        <footer>
          <p>${timeStamp}</p>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
      </article>`
  
    return markup;
  }
  
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  }
  
  renderTweets(data);
})
