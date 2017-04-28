$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val();
    var peoplePerson = $("#peoplePerson").val();
    debugger;
    $(".user").append(userInput);

    $("#recommendationStory").show();

    event.preventDefault();
  });
});
