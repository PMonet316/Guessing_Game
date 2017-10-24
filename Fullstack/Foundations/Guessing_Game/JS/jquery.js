//*****JQuery File*****//

function makeAGuess(game) {
    var guess = $("#player_guess").val();
    $("#player_guess").val("");
    var output = game.playersGuessSubmission(parseInt(guess, 10));
    console.log(output);
}





//-------

$(document).ready(function() {
	var game = new Game;

	$("#submit").click(function() {
		console.log("Hello Fullstack Academy!");
		makeAGuess(game);
	})

	$("#player_guess").keypress(function(event) {
		if (event.which === 13) {
			makeAGuess(game);
		}
	})

	$('#hint').click(function() {
        var hints = game.provideHint();
        $('#title').text('The winning number is '+hints[0]+', '+hints[1]+', or '+hints[2]);
    });

    $('#reset').click(function() {
        game = newGame();
        $('#title').text('Play the Guessing Game!');
        $('#subtitle').text('Guess a number between 1-100!')
        $('.guess').text('-');
        $('#hint, #submit').prop("disabled",false);
    })


})






// function lowerHigher() {
//     if(difference > playersGuess) {
//         $("#subtitle").text("Guess lower!");
//     } else {
//         $("#subtitle").text("Guess higher!");
//     }
// };