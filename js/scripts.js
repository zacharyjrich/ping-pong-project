var pingPong = function(input) {
  var outputList = [];
  for (var i = 1; i <= input; i ++) {
    if (i % 15 === 0) {
      outputList.push("pingpong");
    } else if (i % 5 === 0) {
      outputList.push("pong");
    } else if (i % 3 === 0) {
      outputList.push("ping");
    } else {
    outputList.push(i);
    }
  }
   return outputList;
};

$(document).ready(function() {
  $("form#number_input").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#submission").val());
    var result = pingPong(input);

    // $("#output").text(result);
    result.forEach(function(listResult) {
    $("#output").append("<li>" + listResult + "</li>");

    });
  });
});
