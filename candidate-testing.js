const input = require('readline-sync'); 

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "1) Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["1) Who was the first American woman in space? " , "2) True or false: 5 kilometers == 5000 meters? ", "3) (5 + 3)/2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Dear Candidate, please enter your name: ');
  console.log(`Greetings ${candidateName}. Welcome to the Entry Exam.\n`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  //candidateAnswer = input.question(question);

  for (i = 0; i < 5; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    console.log(`Your answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}.\n`);
  }
  
}


function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let grade = 0;
let finalGrade;
//console.log(correctAnswers);
//console.log(candidateAnswers);

for (let i = 0; i < 5; i++) {
  if (candidateAnswers[i] === correctAnswers[i]) {
    grade = grade + 1; 
    finalGrade = (grade/questions.length) * 100;
  }
}
 console.log(`>>> Overall Grade: ${finalGrade}% (${grade} out of ${questions.length} responses correct) <<<`)

 if (finalGrade < 80) {
   console.log(">>> Status: FAILED <<<");
 } else {
   console.log(`>>> Congratulations ${candidateName}, you passed!`);
 }



/*
let numCorrect = 0;
let numIncorrect = questions.length - numCorrect; 

for (i = 0; i < 5; i++) {
    if (correctAnswers[i] === candidateAnswers[i]) {
      numCorrect += 1;
    }
    
  }
  */


/*
if(candidateAnswer === "Sally Ride") {
  grade = 100;
  console.log(`Correct! Your score is ${grade}%`);
} else {
  grade = 0;
  console.log(`Incorrect. Your score is ${grade}%.`);
}
*/

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};