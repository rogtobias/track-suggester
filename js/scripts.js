$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val();
    var peoplePerson = $("#peoplePerson").val();
    var personalityType = $("#personalityType").val();
    var corporations = $("#corporations").val();
    debugger;
    $(".user").append(userInput);

    $("#recommendationStory").show();

    event.preventDefault();
  });
});
