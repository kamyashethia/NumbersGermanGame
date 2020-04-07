
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
  12 : 'zwolf',
  13 : 'dreizehn',
  14 : 'vierzehn',
  15 : 'funfzehn',
  16 : 'sechszehn',
  17 : 'siebzehn',
  18 : 'achtzehn',
  19 : 'neunzehn',
  20 : 'zwanzig',
  21 : 'einundzwanzig',
  22 : 'zweiundzwansig',
  23 : 'dreiundzwanzig',
  24 : 'vierundzwanzig',
  25 : 'funfundzwanzig',

}

const correctAnswerBackground = "linear-gradient(to bottom left, #02B899 0%, #6EFEAF 100%)";
const incorrectAnswerBackground = "linear-gradient(to bottom left, #660033 0%, #cc3300 100%)";
const baseBackground = "linear-gradient(to bottom left, #3F356E 0%, #C7C1E3 100%)";

window.onload = function() {
  var number = getRandomNumber();
  document.getElementById("number").innerHTML = number;
  //document.getElementById("resultBox").innerHTML = "Let's learn some German Numbers!";

  var input = document.getElementById("answer");

  input.addEventListener("keyup", function(event) {
    // when someone presses the enter key
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      //grab the user's answer and remove all whitespace
      var userAnswer = document.getElementById("answer").value.replace(/\s/g, "");
      var actualAnswer = NUMBERS[number];

      if (userAnswer == actualAnswer) {
          number = invokeCorrectAnswerResponse();
      } else {
        invokeIncorrectAnswerResponse(actualAnswer);
      }

    }
  });

}

function invokeCorrectAnswerResponse() {
  var number2 = getRandomNumber();

  document.getElementById("answer").value = "";
  document.getElementById("backgroundWrapper").style.background = correctAnswerBackground;
  document.getElementById("number").style.background = "#02B899";
  document.getElementById("correct-answer-hint").innerHTML = "Richtig! Gut Gemacht! <br> Correct! Good job!";

  setTimeout(function(){
      document.getElementById("number").innerHTML = number2;
      document.getElementById("backgroundWrapper").style.background = baseBackground;
      document.getElementById("number").style.background = "#5D567E";
      document.getElementById("correct-answer-hint").innerHTML = "";

   }, 1000);

  return number2;
}

function invokeIncorrectAnswerResponse(actualAnswer) {
  document.getElementById("answer").value = "";
  document.getElementById("backgroundWrapper").style.background = incorrectAnswerBackground;
  document.getElementById("correct-answer-hint").innerHTML = "Nein! <br> Richtig Antwort: <b>" + actualAnswer + "</b>";

  setTimeout(function(){
      document.getElementById("backgroundWrapper").style.background = baseBackground;
      document.getElementById("correct-answer-hint").innerHTML = "";
   }, 1000);


}

function getRandomNumber() {
  return Math.floor(Math.random() * 26);
}
