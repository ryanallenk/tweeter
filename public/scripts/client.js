/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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


const createTweetElement = function(tweetData) {
  let tweet = $(`<article><header class="tweet-header"> <span id="name"><img src=${tweetData.user.avatars}</img> ${tweetData.user.name}</span> <span id="user-name">${tweetData.user.handle}</span></header><div class="tweet-id"><p>${tweetData.content.text}</p></div><footer class="tweet-footer"><span>${tweetData.created_at}</span><span class="interact-icons"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span>`);
  return tweet
}

const $tweet = createTweetElement(tweetData);
console.log($tweet);

$( document ).ready(function() {
  console.log( "ready!" );
  $('.container').append($tweet);
});