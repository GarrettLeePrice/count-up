$(document).ready(function() {
  $("form").submit(function(event) {
    // var max = $("input#max").val();
    // var mult = $("input#multiple").val();
    var maxInput = parseInt($("input#max").val());
    var multInput = parseInt($("input#multiple").val());
    var inputs = [maxInput, multInput];

    inputs.forEach(function(input) {
    if (isNaN(input)) {
      alert("Please add an input to all fields.");
    }
    });
    for (var index=0; index <= maxInput; index += multInput) {
      if (maxInput < multInput) {
        alert("Count by field cannot be larger than count to field.");
      } else if (maxInput >= 0 ) {
        $("#results").append("<p>" + index + "</p>");
      }
    };
    event.preventDefault();
  });
});
