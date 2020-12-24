var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("what's your name? ");
console.log('Hi! ' + userName +','+ " welcome , Let's Play!! How much you know about me? " );


 


 function play (question, answer) {
   var userAnswer = readlineSync.question(question);

   if(userAnswer === answer){
     console.log("right!");
     score = score + 1 ;
     console.log("current score:", score);
     console.log("--------")
   } else {
     console.log("wrong!")
          console.log("current score:", score);
     console.log("--------")

   }
 }

 var questions = [{

   question:"1) Where do I live?",
     answer:"hyderabad"
    
 },
 {
    question:" 2) How old am I? ",
      answer:"27"
      
 },
 {
   question:"3) What is my last name? ",
     answer:"lalam"

 },
 {
      question:"4) what is my favorite game? ",
     answer:"football"
 },
 {
      question:"5) what's my favorite color?",
     answer:"black"
 },
 ];


 for ( var i=0; i<questions.length; i++){
   var currentQuestion =questions[i];
   play(currentQuestion.question, currentQuestion.answer)
 }

 console.log(" YOU SCORED : ", score);

 