
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
    //randomnumber will go into here
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
    gamerScore += studentOne;
    $("#friendOne").text(gamerScore);
    updateDisplay();
  });

  $("#friendTwo").on("click",function(){
    gamerScore += studentTwo;
    $("#friendTwo").text(gamerScore);
    updateDisplay();
  });

  $("#friendThree").on("click",function(){
    gamerScore += studentThree;
    $("#friendThree").text(gamerScore);
    updateDisplay();
  });

  $("#friendFour").on("click",function(){
    gamerScore += studentFour;
    $("#friendFour").text(gamerScore);
    updateDisplay();
  });



});