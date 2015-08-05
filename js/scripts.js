
var quiz = [
    ["Who holds the career touchdown passing record?", "Peyton Manning"],
    ["Who holds the career touchdown rushing record?", "Emmitt Smith"],
    ["Who holds the career field goal record?", "Morten Andersen"]
];

var score = 0;  // Initialize score

// Because of hoisting, we can call the 'play' function before defining it
play(quiz);

function play(quiz) {
    welcome();
    // Main game loop
    for (var i = 0, question, answer, max = quiz.length; i < max; i++) {
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }
    gameOver();

    // Nest these next auxilary functions so they can access play's variables
    function welcome() {
        alert("Welcome to our football quiz!");
    }

    function ask(question) {
        return prompt(question);
    }

    function check(answer) {
        if (answer === quiz[i][1]) {
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