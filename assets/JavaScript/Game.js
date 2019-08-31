







<script>

    //create vars Wins, Losses, UserGuess,ComputerGuess, Computer choices//
    var wins = 0;
    var losses = 0;
    var guessSoFar = [];
    var guessLeft = 9;
    var userGuess;
    var computerGuess;
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //put all letters//  
    var displayText = "Press any letter to start!";

    //create a function to display the results to the pg//
    function updateDisplay() {

        document.querySelector("#displayText").innerHTML = displayText;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#guessLeft").innerHTML = guessLeft;
        document.querySelector("#guessSoFar").innerHTML = guessSoFar;

    };

    updateDisplay();

    //create a function to get a random letter from the computer// rock paper sic doc
    function computerRandomLetter() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    };
    //function to reset my scores

    function resetScores() {
        guessLeft = 9;
        guessSoFar = [];
    }

    computerRandomLetter()

    console.log(computerGuess)

    //create a onkey up event function to grab UserGuess
    document.onkeyup = function (event) {

        userGuess = event.key;

        console.log(userGuess);


        guessSoFar.push(userGuess);
        //userguesses are now being pushed into guessSofar


        if (userGuess === computerGuess) {
            wins++;
            resetScores();
            computerRandomLetter();
            document.querySelector("#wins").innerHTML = wins;
            displayText = "hey you won!";
            updateDisplay();
            //win will go up 1//
            //guesses go back to 9 to restart
            //computer will generate another guess
            //display should change to "you won!"
        }
      if (userGuess !== computerGuess) {
            guessLeft--;
            guessSoFar.push(userGuess);
            updateDisplay();
            //guesses should be 1 less than it was
            //user guess should show in guesses so far span

        }

        if (guessLeft === 0) {
            resetScores()
            losses++;
            displayText = "you lost!";
            computerRandomLetter();
            updateDisplay();
        }
        //once it gets down to 0 reset
        //lose will go up 1//

        updateDisplay();


    };
