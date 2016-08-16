$(document).ready(function() {
  $("form").submit(function(event) {
    // var max = $("input#max").val();
    // var mult = $("input#multiple").val();
    var maxInput = parseInt($("input#max").val());
    var multInput = parseInt($("input#multiple").val());
    var total = 0;

    for (var index=0; index <= maxInput; index += multInput) {
      if (maxInput < multInput) {
        alert("Count by field cannot be larger than count to field.");
      } else if (isNaN(maxInput) === true) {
        alert("Please add an input to all fields.");
      } else if (maxInput >= 0 ) {
        $("#results").append("<p>" + index + "</p>");
      }
    };
    event.preventDefault();
  });
});



// $(document).ready(function() {
//   $("form").submit(function(event) {
//     var maxInput = parseInt($("input#max").val());
//     var multInput = parseInt($("input#multiple").val());
//     var total = 0;
//     debugger;
//     for (var index=0; index <= maxInput; index += multInput) {
//       if (maxInput < multInput) {
//         alert("Count by field cannot be larger than count to field.");
//       } else if (maxInput >= 0) {
//         $("#results").append("<p>" + index + "</p>");
//     }
//     event.preventDefault();
//   });
// });
