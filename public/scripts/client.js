/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const createTweetElement = function(tweet) {
    const username = tweet.user.name;
    const handle = tweet.user.handle;
    const avatar = tweet.user.avatars;
    const content = tweet.content.text;
    const timeStamp = timeago.format(tweet.created_at);
  
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
      $('#tweets-container').prepend($tweet);
    }
  }

  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    const $text = $(this).serialize();

    //140 character limit for tweets
    const limit = 140;
    const $input =  $('textarea').val();

    if ($input.length === 0) {
      // event.stopImmediatePropagation();
      alert("There's nothing here! Tweet");
      return;
    }
    if ($input.length > limit) {
      event.stopImmediatePropagation();
      alert("Tweet tweet that's too long of a message tweet");
      return;
    }
   
    $.post('/tweets', $text)
  });

  const loadTweets = function() {
    $('#submit-tweet').on('submit', function(event) {
      event.preventDefault();
      $.get('/tweets', function(data) {
        renderTweets(data);
      })
      //Clear text area after submission
      $('textarea').val('');
      $('output').get(0).reset();
    });
  };
/// BUGS TO FIX: 
/// character counter doesnt reset after a successful submit
/// page renders and shows tweets twice
/// tweet shows right after submit half the time
  loadTweets();

});
