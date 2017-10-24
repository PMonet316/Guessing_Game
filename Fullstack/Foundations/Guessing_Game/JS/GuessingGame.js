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

//-----Game constructor function----

function Game() {
  this.playersGuess = null;
  this.pastGuesses = [];
  this.winningNumber = generateWinningNumber();
}

//------

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

//-----Player Submission Guess function----

Game.prototype.playersGuessSubmission = function(guess) {
    if (guess >= 1 && guess <= 100 && typeof guess === 'number') {
        this.playersGuess = guess;
        return this.checkGuess(guess);
    } else {
        throw "That is an invalid guess.";
    }
}


//----Checks guess against winning number function----

Game.prototype.checkGuess = function() {
    if(this.playersGuess===this.winningNumber) {
        $("#title").text("YOU WIN!");
        $("#subtitle").text("You rock!");
        $('#hint, #submit').prop("disabled",true);
        //$('#subtitle').text("Press the Reset button to play again!")
        return 'You Win!'
    }
    else {
        if(this.pastGuesses.indexOf(this.playersGuess) > -1) {
            return 'You have already guessed that number.';
        }
        else {
            this.pastGuesses.push(this.playersGuess);
            $('#guess_list li:nth-child('+ this.pastGuesses.length +')').text(this.playersGuess);
            if(this.pastGuesses.length === 5) {
                $("#title").text("You Lose!");
                $('#hint, #submit').prop("disabled",true);
                $('#subtitle').text("Press the Reset button to play again!")
                return 'You Lose.';
            }
            else {
                var diff = this.difference();
                if(this.isLower()) {
                    $('#subtitle').text("Guess Higher!")
                } else {
                    $('#subtitle').text("Guess Lower!")
                }
                if(diff < 10) {
                    $("#title").text("You're burning up!");
                    return'You\'re burning up!';
                    }
                else if(diff < 25) {
                    $("#title").text("You're lukewarm.");
                    return'You\'re lukewarm.';
                    }
                else if(diff < 50) {
                    $("#title").text("You're a bit chilly");
                    return'You\'re a bit chilly.';
                    }
                else {
                    $("#title").text("You're ice cold!");
                    return'You\'re ice cold!';
                    }
            }
        }
    }
}


// Game.prototype.checkGuess = function() {
//     if (this.playersGuess === this.winningNumber) {
//         $("#title").text("YOU WIN!");
//         $("#subtitle").text("You rock!");
//         return "You Win!";
//     }
//     if (this.pastGuesses.indexOf(this.playersGuess) > -1) {
//         $("#title").text("You have already guessed that number.");
//         $("#subtitle").text("Guess again!");
//         return "You have already guessed that number.";
//     }
    
//     this.pastGuesses.push(guess);
    
//     if (this.pastGuesses.length === 5) {
//         $("#title").text("You Lose!");
//         $("#subtitle").text("Press the Start Again button to play again!");
//         return "You Lose";   
//     }

//     var difference = this.difference();

//     if (difference < 10) { 
//         $("#title").text("You're burning up!");
//         if(this.isLower()) {
//             $('#subtitle').text("Guess Higher!")
//         } else {
//             $('#subtitle').text("Guess Lower!")
//         }
//         return "You're burning up!";
     

//     }
//     if (difference < 25) {
//         $("#title").text("You're lukewarm.");
//         if(this.isLower()) {
//             $('#subtitle').text("Guess Higher!")
//         } else {
//             $('#subtitle').text("Guess Lower!")
//         }
//         return "You're lukewarm.";
//     }

//     if (difference < 50) {
//         $("#title").text("You're a bit chilly");
//         if(this.isLower()) {
//             $('#subtitle').text("Guess Higher!")
//         } else {
//             $('#subtitle').text("Guess Lower!")
//         }
//         return "You're a bit chilly.";
//     }

//     $("#title").text("You're ice cold!");
//     if(this.isLower()) {
//     $('#subtitle').text("Guess Higher!")
//     } else {
//         $('#subtitle').text("Guess Lower!")
//     }
//     return "You're ice cold!";    
        
// }



