


    
    // Keep current score board
    //score will go up in a win when almighNumber === studentValue
    var wins = 0;

    // score will go up in losses when studentValue > almightNumber
    //reset displays once lose happens
    var losses = 0;

    //student value will change everytime the game starts
    //each student will have a different value from 1-9
    var studentOne;
    var studentTwo;
    var studentThree;
    var studentFour;

    //randomnumber will go into here

    var almightNumber;

    //Gamers added total
    var gamerScore;


    //create a function to display the results to the pg//
    function updateDisplay() {
       
        document.querySelector("#almightNumber").innerHTML = almightNumber;
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#gamerScore").innerHTML = gamerScore;
    };

    updateDisplay();

   
    
    //create a function to get a random number for almight
    //Might have to fix so it randomize a number
    function randomNumber() {
        almightNumber = randomlySelectedNumber [Math.floor(Math.random() * randomlySelectedNumber.length)];
    };
    $( "friendOne" ).click(function() {
        randomNumber();
        

   
    //function to reset my gamer score
    //happens after gamerscore > almight
    function resetScores() {
        gamerScore;
    }

//learn to connect JS to Index.html
//Cleaned up code until here will continue back HERE!!!!




randomNumber()

    console.log(almightNumber)

    //create a onkey up event function to grab UserGuess
    document.onkeyup = function (event) {

        gamerScore = event.key;

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
