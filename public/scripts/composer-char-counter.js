$(document).ready(function() {
  $("#tweet-text").on("input", function(event) {
    // logic to find the number of characters left
    let charactersLeft = 140 - $(this).val().length
      // logic to find the couter element by traversing the dom tree
      let counter = $(this).parent().find(".counter")
      // set the value of the counter to the number of characters left
      counter.prop("innerText", charactersLeft)
      // counter.text(charactersLeft)
      if (charactersLeft < 0) {
        counter.css({color: "red"})
      }
      if (charactersLeft > 0) {
        counter.css({color: "#545149"})
      }
  })
});