var actions = require('./actions');
var update = require('react-addons-update');
var store = require('./store');

/**
 * State object including game data
 */
var initialState = [
  {
    guessArray: [],
    randomNumber: Math.floor((Math.random() * 100) + 1),
    feedback: 'Make your Guess!',
    winner: false
  }
];

// var currentState;
var gameReducer = function(state, action) {
  state = state || initialState;

  if (action.type === actions.START_NEW_GAME){
    return state.concat({
      guessArray: [],
      randomNumber: Math.floor((Math.random() * 100) + 1),
      feedback: 'Make your Guess!',
      winner: false
    });
  }
  else if (action.type === actions.USER_GUESS){
    if (typeof action.guess === 'number' && (action.guess >= 1 && action.guess <= 100)) {
      // state.concat({

      // });
      var currentState = update(state, {
                                  [state.length - 1]: {
                                    guessArray:
                                      {$push: [action.guess]
                                    },
                                    feedback:
                                      {$set: ''}
                                    }
                                  });
      console.log(currentState);
      var randomNumber = state[state.length - 1].randomNumber;
      var distance = Math.abs(action.guess - randomNumber);

      if (distance === 0) {
        currentState[currentState.length - 1].winner = true;
        currentState[currentState.length-1].feedback = 'You win!'
      }

      else if (distance >= 50) {
        currentState[currentState.length-1].feedback = 'Ice cold!'
      }

      else if (distance >= 30) {
        currentState[currentState.length-1].feedback = 'Cold!'
      }

      else if (distance >= 20) {
        currentState[currentState.length-1].feedback = 'Getting warm!'
      }

      else if (distance >= 10) {
        currentState[currentState.length-1].feedback = 'Warm!'
      }

      else if (distance >= 1) {
        currentState[currentState.length-1].feedback = 'Hot!'
      }

      return currentState;
    }
    else {
      var currentState = update(state, {
        [state.length - 1]: {
          feedback: {$set: 'Invalid input! Enter a number between 1 & 100.'}
        }
      });
      return currentState;
    }
  }
  console.log(state);
  return state;
};

exports.gameReducer = gameReducer;