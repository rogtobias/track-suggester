$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val();
    var peoplePerson = $("#peoplePerson").val();
    var personalityType = $("#personalityType").val();
    var corporations = $("#corporations").val();
    var popular = $("#popular").val();
    var appType = $("#appType").val();
    debugger;
    $(".user").append(userInput);

    $("#recommendationStory").show();

    event.preventDefault();
  });
});
