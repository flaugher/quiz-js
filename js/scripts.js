
var quiz = {
    "name": "Football player quiz",
    "description": "How many football players' teams can you name?",
    "question_start": "What team did ",
    "question_end": " play on?",
    "questions": [
        { "question": "Bart Starr", "answer": "Green Bay Packers" },
        { "question": "Tom Brady", "answer": "New England Patriots"},
        { "question": "Dick Butkus", "answer": "Chicago Bears"}
    ]
};

var score = 0;  // Initialize score

// Because of hoisting, we can call the 'play' function before defining it
play(quiz);

function play(quiz) {
    welcome();
    // Main game loop
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }
    gameOver();

    // Nest these next auxilary functions so they can access play's variables
    function welcome() {
        alert("Welcome to our football quiz!");
    }

    function ask(questionquestion_) {
        return prompt(quiz.question_start + question + quiz.question_end)
    }

    function check(answer) {
        if (answer === quiz.questions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Sorry, that's not the right answer.");
        }
    }

    function gameOver() {
        alert("The game is over.  You scored " + score + " points.");
    }
}