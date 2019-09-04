
$(document).ready(function() {

   // Keep current score board
    //score will go up in a win when almighNumber === studentValue
    var wins = 0;
    // score will go up in losses when studentValue > almightNumber
    //reset displays once lose happens
    var losses = 0;
    //student value will change everytime the game starts
    //each student will have a different value from 1-12
    var studentOne;
    var studentTwo;
    var studentThree;
    var studentFour;
   
    var almightNumber;
    //Gamers added total
    var gamerScore;
    


    //create a function to display the results to the pg//
    function updateDisplay() {
       
        $("#almightNumber").text(almightNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#gamerScore").text(gamerScore);
    };

    updateDisplay();
    
    //create a function to get a random number for almight
    //create a function for the seperate images to generate a random number
    //helped plug in into the html using jquery
    
   function startGame(){
       gamerScore=0;

       almightNumber = Math.floor(Math.random() *(120-19) + 19);
       studentOne = Math.floor(Math.random() * 12) + 1;
       studentTwo = Math.floor(Math.random() * 12) + 1;
       studentThree = Math.floor(Math.random() * 12) + 1;
       studentFour= Math.floor(Math.random() * 12) + 1;

       $("#almightNumber").text(almightNumber);
       $("#gamerScore").text(gamerScore);

   } 
  startGame();

  $("#friendOne").on("click",function(){
    gamerScore= studentOne + gamerScore;
    $("#friendOne").text(gamerScore);
    updateDisplay();
  });

  $("#friendTwo").on("click",function(){
    gamerScore = studentTwo + gamerScore;
    $("#friendTwo").text(gamerScore);
    updateDisplay();
  });

  $("#friendThree").on("click",function(){
    gamerScore = studentThree + gamerScore;
    $("#friendThree").text(gamerScore);
    updateDisplay();
  });

  $("#friendFour").on("click",function(){
    gamerScore = studentFour + gamerScore;
    $("#friendFour").text(gamerScore);
    updateDisplay();
  });


  if (gamerScore === almightNumber) {
    wins++;
    $("#wins").text(wins);
    startGame();
    updateDisplay();
    //win will go up 1//
    //almight will think of another number
    //wins will go on screen
  };

  if (gamerScore > almightNumber) {
    losses++;
    $("#losses").text(losses);
    updateDisplay();
    //guesses should be 1 less than it was
    //user guess should show in guesses so far span

  };






});