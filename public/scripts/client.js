$(document).ready(function() {
  
  //Encodes string to become safe HTML and prevent XSS
  const escape = function (str) {
    let text = document.createElement("text");
    text.appendChild(document.createTextNode(str));
    return text.innerHTML;
  };

  //Creates HTML markup of user's tweet passed in an object
  const createTweetElement = function(tweet) {
    const username = tweet.user.name;
    const handle = tweet.user.handle;
    const avatar = tweet.user.avatars;
    const content = escape(tweet.content.text);
    const timeStamp = timeago.format(tweet.created_at);
    
    const markup = `
      <article>
        <header>
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
  
  //Renders new tweet and prepends it to container
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  }

  //Loads page
  const loadTweets = function() {
    $.get('/tweets', function(data) {
      renderTweets(data);
    });
  };

  //Post request to /tweets after a successful submit
  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    const $text = $(this).serialize();

    //140 character limit for tweets
    const limit = 140;
    const $input =  $('textarea').val();
    const $empty = $('#error-empty');
    const $overLimit = $('#error-limit');
    
    //Show error message depending on character count
    if ($input.length === 0) {
      event.stopImmediatePropagation();
      $empty.slideDown().css("display", "flex").delay(3000).slideUp();
      return;
    }
    if ($input.length > limit) {
      event.stopImmediatePropagation();
      $overLimit.slideDown().css("display", "flex").delay(3000).slideUp();
      return;
    }
   
    $.post('/tweets', $text)
    .then(()=>{
      //Clear text area after submission and reset character counter
      $('textarea').val('');
      $('output').html(140);
      //Load the new tweet along with the rest of the existing tweets
      $('#tweets-container').empty();
      loadTweets();
    });
  });

  loadTweets();

});
