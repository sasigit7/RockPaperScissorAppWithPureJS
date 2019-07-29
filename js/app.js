var mySelection,
    compSelection,
    winner;

  mySelection = document.getElementById('mySelection');
  compSelection = document.getElementById('compSelection');
  winner = document.getElementById('winner');

var play = function () {
  // console.log('Playing Now');
  var myResponse = prompt('Rock[1], Paper[2], or Scissor[3]');
  var compResponse = compSelectionGenerator();

  mySelection.innerHTML = translator(myResponse);
  compSelection.innerHTML = translator(compResponse);
  winner.innerHTML = translator(processWinner(myResponse, compResponse));

  // console.log(processWinner(myResponse, compResponse));
  // var winnerDecision = processWinner(myResponse, compResponse);
  // var winnerValue = translator(winnerDecision);

  // winner.innerHTML = translator(winnerDecision);
}

var compSelectionGenerator = function () {
    // console.log(Math.random()); 
    return Math.floor((Math.random() * 3) + 1);
}
// console.log(Math.floor(Math.random() * 3)+1);

var translator = function (input) {
  input = parseInt(input);
  if(input === 0) {
      return 'Draw';
  } else if(input === 1) {
      return 'Rock';
  } else if (input === 2) {
      return 'Paper';
  } else if (input === 3) {
      return 'Scissor';
  } else {
      return 'Enter number 1, 2 or 3 only!';
  }
}

var processWinner = function (myResp, compResp) {
  var diff = Math.abs(myResp - compResp);

  if(diff === 1) {
      if(myResp > compResp) {
          return myResp;
      } else {
          return compResp;
      }
  } else if (diff > 1) {
      if (myResp < compResp) {
          return myResp;
      } else {
          return compResp;
      }
  } else if (diff === 0) {
      return 0;
  }
}















