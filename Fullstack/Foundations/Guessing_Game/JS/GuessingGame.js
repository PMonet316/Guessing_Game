function generateWinningNumber() {
  return Math.floor(Math.random() * 100) +1;
}


//-----Fisher-Yates Algorithm----//

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    //console.log(array);
  }

  return array;
}

//-----Game constructor function---

function Game() {
  this.playersGuess = null;
  this.pastGuesses = [];
  this.winningNumber = generateWinningNumber();
}



Game.prototype.playersGuessSubmission = function(input) {
    if (input >= 1 && input <= 100 && typeof input === 'number') {
        this.playersGuess = input;
        return this.checkGuess(input);
    } else {
        throw "That is an invalid guess.";
    }
}


Game.prototype.checkGuess = function(input) {
    if (input === this.winningNumber) {
        return "You Win!";
    }
    if (this.pastGuesses.indexOf(input) !== -1) {
        return "You have already guessed that number.";
    }
    this.pastGuesses.push(input);
    
    if (this.pastGuesses.length >= 5) {
        return "You Lose".
    }

    var difference = this.difference();
    if (difference < 10) {
        return "You're burning up!";
    }
    if (difference < 25) {
        return "You're lukewarm.";
    }
    if (difference < 50) {
        return "You're a bit chilly.";
    }
    return "You're ice cold!";
}


Game.prototype.difference = function() {
    return Math.abs(this.playersGuess - this.winningNumber);
}

Game.prototype.isLower = function() {
    return (this.playersGuess - this.winningNumber) < 0;
}

Game.prototype.provideHint = function() {
    var hintArray = [this.winningNumber, generateWinningNumber(), generateWinningNumber()];
    return shuffle(hintArray);
}

var generateWinningNumber = function() {
    return Math.floor(Math.random() * 100) + 1;
}

var newGame = function() {
    return new Game();
}