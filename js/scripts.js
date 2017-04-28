$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val();

    $(".user").append(userInput);

    $("#recommendationStory").show();

    event.preventDefault();
  });
});
