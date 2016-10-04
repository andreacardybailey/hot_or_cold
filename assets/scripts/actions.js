/**
 * start a new game
 */
var START_NEW_GAME = 'START_NEW_GAME';
var startNewGame = function() {
    return {
        type: START_NEW_GAME
    };
};

/** makes guess and validates
 * the users guess from the makeGuess action.
 */
var USER_GUESS = 'USER_GUESS';
var userGuess = function(guess) {
  return {
    type: USER_GUESS,
    guess: guess
  };
};

exports.START_NEW_GAME = START_NEW_GAME;
exports.startNewGame = startNewGame;

exports.USER_GUESS = USER_GUESS;
exports.userGuess = userGuess;





