
// Get the input field


window.onload = function() {
  document.getElementById("number").innerHTML = getNumber();

  var input = document.getElementById("answer");

  input.addEventListener("keyup", function(event) {
    // when someone presses the enter key
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      console.log(document.getElementById("answer").value);
    }
  });

}

function getNumber() {
  return 11;
}
