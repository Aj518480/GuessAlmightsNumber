


    
    // Keep current score board
    //score will go up in a win when almighNumber === studentValue
    // score will go up in losses when studentValue > almightNumber
    var wins = 0;
    var losses = 0;
    //student value will change everytime the game starts
    //each student will have a different value from 1-9
    var studentOne;
    var studentTwo;
    var studentThree;
    var studentFour;

    //computer guess that will generate
    var almightNumber;
    //current value of added value of imgs
    var gamerScore;
    var computerValue
    //not needed right now
    // var guessSoFar = [];
    // var guessLeft = 9;
    // var userGuess;

    var computerGuess;
     
   

    //create a function to display the results to the pg//
    function updateDisplay() {
        //user number they have to get to
        document.querySelector("#almightNumber").innerHTML = almightNumber;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#gamerScore").innerHTML = gamerScore;
        document.querySelector("#studentValues").innerHTML = studentValues;

        //not needed just yet

         //document.querySelector("#guessLeft").innerHTML = guessLeft;
        //document.querySelector("#guessSoFar").innerHTML = guessSoFar;

    };

    updateDisplay();

    //create a function to get a random letter from the computer// 
    function computerRandomLetter() {
        computerGuess = randomlySelectedNumber [Math.floor(Math.random() * randomlySelectedNumber.length)];
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
