
//array of objects with trivia, images and answers
var trivia = [
    {
        question: "Where is the Eiffel Tower?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web03/enhanced-19058-1476804280-8.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Italy', 'France', 'Denmark', 'Germany'],
        correctAnswer: 1
    },{
        question: "Where would you find the Great Buddha of Kamakura?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web12/enhanced-4600-1476805044-10.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['China', 'Mongolia', 'Japan', 'Indonesia'],
        correctAnswer: 2
    }, {
        question: "Which country is the Statue of Liberty in?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web05/enhanced-1151-1476804445-8.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['USA', 'England', 'Canada', 'France'],
        correctAnswer: 0
    }, {
        question: "Where is the Colosseum?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web15/enhanced-9659-1476804588-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Greece', 'Switzerland', 'Sweden', 'Italy'],
        correctAnswer: 3
    }, {
        question: "Which country is the Alhambra in?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web11/enhanced-17856-1476804783-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Columbia', 'Guatemala', 'Mexico', 'Spain'],
        correctAnswer: 3
    }, {
        question: "Which country is the Borobudur Temple in?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web11/enhanced-17856-1476804783-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Thailand', 'Malaysia', 'Indonesia', 'Vietnam'],
        correctAnswer: 2
    }, {
        question: "The Kremlin is in...",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web11/enhanced-17856-1476804783-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Sweden', 'Russia', 'Serbia', 'Ukraine'],
        correctAnswer: 1
    }, {
        question: "Which country is Neuschwanstein Castle found in?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web11/enhanced-17856-1476804783-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Germany', 'Austria', 'Liechtenstein', 'Luxembourg'],
        correctAnswer: 0
    }, {
        question: "Where is the Temple of Angkor Wat?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web11/enhanced-17856-1476804783-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Sri Lanka', 'Bhutan', 'Vietnam', 'Cambodia'],
        correctAnswer: 3
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var number = 5;
var intervalId;

$(document).ready(function () {

    $("#start-button").on("click", function() {
        //quiz start function
        displayCurrentQuestion();
    });
    
    $(this).find(".quizMessage").hide();

    $(".quizContainer").append("<button class='nextButton'>" + "Next Question!" + "</button>");

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == trivia[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < trivia.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").toggle();
                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

// This displays the current question AND the answers
function displayCurrentQuestion() {

    runTimer();
    $("#start-button").hide();

    var question = trivia[currentQuestion].question;
    //var imgPlace = trivia[currentQuestion].photo;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    //var imgShow = $(document).find(".quizContainer > .imgShow");
    var numAnswers = trivia[currentQuestion].answers.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numAnswers; i++) {
        choice = trivia[currentQuestion].answers[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + " " + choice + '</li>').appendTo(choiceList);
        //$('<img src=' + imgPlace + '>').appendTo(imgShow);
    }
}
    var number = 5;
    var intervalId;

    function runTimer() {
        number = 5;
        if ( !intervalId) {
        intervalId = setInterval(decrement, 1000);
        }
    }
    
    function decrement() {
        number--;
        $("#show-number").html("<h2>" + "Time Left: " + number + "</h2>");

        if (number === 0) {
            stop();
            alert("Times Up!" + " Your Score: " + correctAnswers + " " + "Click OK to play again!");
            resetQuiz();
            quizOver = true;
        }
    }

    function stop() {
        clearInterval(intervalId);
        intervalId = 0;
    }

    function resetQuiz() {
        currentQuestion = 0;
        correctAnswers = 0;
        hideScore();
    }

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + trivia.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}