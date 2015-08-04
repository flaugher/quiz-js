// Welcome
alert("Welcome to our quiz!");

var quiz = [
    ["Who holds the career touchdown passing record?", "Peyton Manning"],
    ["Who holds the career touchdown rushing record?", "Emmitt Smith"],
    ["Who holds the career field goal record?", "Morten Andersen"]
];

var score = 0;  // Initialize score

for (var i=0, max=quiz.length; i< max; i++) {

    var answer = prompt(quiz[i][0]);

    if (answer === quiz[i][1]) {
        alert("You're right!");
        score++;
    } else {
        alert("Sorry, that's incorrect");
    }

}

var message = "The quiz is over.  You scored ";
message += score === 1 ? score + " point." : score + " points.";
alert(message);