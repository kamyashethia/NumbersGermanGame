
// from http://www.marijn.org/everything-is-4/counting-0-to-100/german
const NUMBERS = {
  0 : 'null',
  1 : 'eins',
  2 : 'zwei',
  3 : 'drei',
  4 : 'vier',
  5 : 'funf',
  6 : 'sechs',
  7 : 'seiben',
  8 : 'acht',
  9 : 'neun'
}

window.onload = function() {
  var number = getRandomNumber();
  document.getElementById("number").innerHTML = number;

  var input = document.getElementById("answer");

  input.addEventListener("keyup", function(event) {
    // when someone presses the enter key
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      //grab the user's answer and remove all whitespace
      var userAnswer = document.getElementById("answer").value.replace(/\s/g, "");
      var actualAnswer = NUMBERS[number];
      console.log(userAnswer);
      console.log(actualAnswer);
      if (userAnswer == actualAnswer) {
        console.log( 'tis correct');
        number = getRandomNumber();
        document.getElementById("number").innerHTML = number;
        document.getElementById("answer").value = "";
        console.log(document.getElementById("backgroundWrapper").style.backgroundColor);
        document.getElementById("backgroundWrapper").style.background = "linear-gradient(to bottom left, #02B899 0%, #6EFEAF 100%)";
      } else {
        console.log('tis wrong');
        document.getElementById("answer").value = "";
        document.getElementById("backgroundWrapper").style.background = "linear-gradient(to bottom left, #660033 0%, #cc3300 100%)";

        //document.getElementById("number").innerHTML = getRandomNumber();
      }


      //show result

      //display new numbers

    }
  });

}


function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
