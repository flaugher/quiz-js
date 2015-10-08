var quiz = {
    "name":"Super Hero Name Quiz",
    "description":"How many super heroes can you name?",
    "question":"What is the real name of ",
    "questions": [
        { "question": "Superman", "answer": "Clark Kent" },
        { "question": "Batman", "answer": "Bruce Wayne" },
        { "question": "Wonder Woman", "answer": "Dianna Prince" }
    ]
}

/// DOM references start with "$" ///
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");

/// view functions ///
function update(element, content, klass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if (klass) {
        p.className = klass;
    }
}

// Because of hoisting, we can call the 'play' function before defining it
play(quiz);

function play(quiz) {
    // welcome();
    var score = 0;  // Initialize score
    update($score, score);

    // Main game loop
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }
    gameOver();

    // Nest these next auxilary functions so they can access play's variables
    /*
    function welcome() {
        alert("Welcome to our football quiz!");
    }
    */

    function ask(question) {
        update($question, quiz.question + question);
        return prompt("Enter your answer: ");
    }

    function check(answer) {
        if (answer === quiz.questions[i].answer) {
            update($feedback, "Correct!", "right");
            score++;
            update($score, score);
        } else {
            update($feedback, "Wrong!", "wrong");
        }
    }

    function gameOver() {
        update($question, "Game over, you scored " + score + " points");
    }
}
