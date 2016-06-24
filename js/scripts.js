var listNumbers = function(input) {
  var numbers = [];
  for (var i = 1; i <= input; i ++) {
    numbers.push(i);

  }
   return numbers;
};

$(document).ready(function() {
  $("form#number_input").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#submission").val());
    var result = listNumbers(input);

    // $("#output").text(result);
    result.forEach(function(listResult) {
    $("#output").append("<li>" + listResult + "</li>");
    });
  });
});
