/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = []


const createTweetElement = function(tweetData) {
  let $tweet = $(`<article>
  <header class="tweet-header">
  <span id="name"><img src=${tweetData.user.avatars}</img>${tweetData.user.name}</span><span id="user-name">${tweetData.user.handle}</span>
  </header>
  <div class="tweet-id"><p>${escape(tweetData.content.text)}</p>
  </div>
  <footer class="tweet-footer"><span>${jQuery.timeago(tweetData.created_at)}</span><span class="interact-icons"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span>
  </footer>`);

  return $tweet
}

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    // takes return value and prepends it to the tweets container
    $('.tweets').prepend(createTweetElement(tweet));
  }
}

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};



$( document ).ready(function() {
  
  $('form').submit(function(event) {
    event.preventDefault();
    const tweetText = $('#tweet-text').val().toString()
    $(".error-message").slideUp("fast", function() {

    });
    if (tweetText === "" || tweetText === null) {
      $("#error-message-text").text("Sorry, we cannot send empty tweets!")
      $(".error-message").slideDown("fast", function() {
        });
      return
      };
    if (tweetText.length > 140) {
      $("#error-message-text").text("Sorry, we cannot send tweets over 140 characters!")
      $(".error-message").slideDown("fast", function() {
        });
      return
      };

    const data = $(this).serialize();
    
    $.post("/tweets", data)
      .then(() => {
      loadTweets();
      })
  })

  const loadTweets = function () {
    $.get("./tweets")
    .then(function(data) {
      $('.tweets').empty();
      renderTweets(data);
      $('#tweet-text').val("")
    }) 
  }
  loadTweets();
});

