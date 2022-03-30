/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
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


const createTweetElement = function(tweetData) {
  let $tweet = $(`<article>
  <header class="tweet-header">
  <span id="name"><img src=${tweetData.user.avatars}</img>${tweetData.user.name}</span><span id="user-name">${tweetData.user.handle}</span>
  </header>
  <div class="tweet-id"><p>${tweetData.content.text}</p>
  </div>
  <footer class="tweet-footer"><span>${tweetData.created_at}</span><span class="interact-icons"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span>
  </footer>`);

  return $tweet
}

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('.container').append(createTweetElement(tweet));
  }
}



$( document ).ready(function() {
renderTweets(tweetData);
});

$( document ).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
  })
});

