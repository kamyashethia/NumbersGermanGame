
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
  9 : 'neun',
  10 : 'zehn',
  11 : 'elf',
  12 : 'zwölf',
  13 : 'dreizehn',
  14 : 'vierzehn',
  15 : 'funfzehn',
  16 : 'sechszehn'

}

const correctAnswerBackground = "linear-gradient(to bottom left, #02B899 0%, #6EFEAF 100%)";
const incorrectAnswerBackground = "linear-gradient(to bottom left, #660033 0%, #cc3300 100%)";
const baseBackground = "linear-gradient(to bottom left, #3F356E 0%, #C7C1E3 100%)";

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
          number = invokeCorrectAnswerResponse();
      } else {
        invokeIncorrectAnswerResponse();
      }

    }
  });

}

function invokeCorrectAnswerResponse() {
  console.log( 'tis correct');
  var number2 = getRandomNumber();

  document.getElementById("answer").value = "";
  document.getElementById("backgroundWrapper").style.background = correctAnswerBackground;

  setTimeout(function(){
      document.getElementById("number").innerHTML = number2;
      document.getElementById("backgroundWrapper").style.background = baseBackground;
   }, 1000);

  return number2;
}

function invokeIncorrectAnswerResponse() {
  console.log('tis wrong');
  document.getElementById("answer").value = "";
  document.getElementById("backgroundWrapper").style.background = incorrectAnswerBackground;

  setTimeout(function(){
      document.getElementById("backgroundWrapper").style.background = baseBackground;
   }, 1000);


}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
