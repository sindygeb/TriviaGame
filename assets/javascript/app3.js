
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
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web15/enhanced-11442-1476805463-2.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Thailand', 'Malaysia', 'Indonesia', 'Vietnam'],
        correctAnswer: 2
    }, {
        question: "The Kremlin is in...",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web12/enhanced-6404-1476805921-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Sweden', 'Russia', 'Serbia', 'Ukraine'],
        correctAnswer: 1
    }, {
        question: "Which country is Neuschwanstein Castle found in?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/11/enhanced/buzzfeed-prod-web11/enhanced-17856-1476804783-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Germany', 'Austria', 'Liechtenstein', 'Luxembourg'],
        correctAnswer: 0
    }, {
        question: "Where is the Temple of Angkor Wat?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/12/enhanced/buzzfeed-prod-web06/enhanced-20680-1476806414-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Sri Lanka', 'Bhutan', 'Vietnam', 'Cambodia'],
        correctAnswer: 3
    }, {
        question: "Where is the CN Tower?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/12/enhanced/buzzfeed-prod-web11/enhanced-20581-1476806647-5.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Germany', 'England', 'USA', 'Canada'],
        correctAnswer: 3
    }, {
        question: "Where is Petra?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/12/enhanced/buzzfeed-prod-web01/enhanced-7205-1476806856-2.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Jordan', 'Indonesia', 'Iraq', 'Syria'],
        correctAnswer: 0
    }, {
        question: "Where is the Manneken Pis?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/12/enhanced/buzzfeed-prod-web01/enhanced-7882-1476807307-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Luxembourg', 'Belgium', 'Denmark', 'France'],
        correctAnswer: 1
    }, {
        question: "Where is Hagia Sophia?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/12/enhanced/buzzfeed-prod-web03/enhanced-26921-1476807975-2.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Kuwait', 'Egypt', 'Iran', 'Turkey'],
        correctAnswer: 3
    }, {
        question: "Where can Christ the Redeemer be found?",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/18/12/enhanced/buzzfeed-prod-web15/enhanced-13356-1476808161-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        answers: ['Argentina', 'Uruguay', 'Brazil', 'Peru'],
        correctAnswer: 2
    }, {
        question: "BONUS QUESTION: Where in the world is Carmen Sandiego?",
        photo: "https://images-na.ssl-images-amazon.com/images/I/919BmUO1h7L._SL1500_.jpg",
        answers: ['The Last Place You Would Expect', 'Everywhere', 'Right Behind You!', 'Who?'],
        correctAnswer: 0
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var currentImage = 0;
var quizEnd = false;
var number = 5;
var intervalId;

$(document).ready(function () {

    //$(".nextButton").hide();

    $("#start-button").on("click", function() {
        //quiz start function
        displayCurrentQuestion();
        //$(".nextButton").show();
    });
    
    $(".quizContainer").append("<button class='nextButton'>" + "Next Question!" + "</button>");
    $(".nextButton").hide();

    // Click function for next
    $(this).find(".nextButton").on("click", function () {
        if (!quizEnd) {

            value = $("input[type='radio']:checked").val();

            if (value == trivia[currentQuestion].correctAnswer) {
                correctAnswers++;
            }

            currentQuestion++;
            currentImage++;

            //keep loading new question if it's less than the array number
            if (currentQuestion < trivia.length) {
                displayCurrentQuestion();
                //if the currentQuestion = trivia length - last question
            } else {
                displayScore();
                stop();
                alert("You did it! You finished all the questions! Score: " + correctAnswers);
                
                // Change the text in the next button to ask if user wants to play again
                $(document).find(".nextButton").text("Play Again?");
                number = 0;
                quizEnd = true;
            }
        // quiz is over
        } else { 
            quizEnd = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

// Brings a question from the array forward
function displayCurrentQuestion() {

    runTimer();
    $("#start-button").hide();
    $(".nextButton").show();
    $("#show-number").html("<h2>Time Left:</h2>");

    var question = trivia[currentQuestion].question;
    var photo = trivia[currentImage].photo;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var photoPlace = $(document).find(".quizContainer > .photoPlace")
    var numAnswers = trivia[currentQuestion].answers.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);
    $(photoPlace).html("<img src=" + photo + ">");

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numAnswers; i++) {
        choice = trivia[currentQuestion].answers[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + " " + choice + '</li>').appendTo(choiceList);
        //$('<img src=' + imgPlace + '>').appendTo(imgShow);
    }
}
    var number = 11;
    var intervalId;

    function runTimer() {
        number = 11;
        if ( !intervalId) {
        intervalId = setInterval(decrement, 1000);
        }
    }
    
    function decrement() {
        number--;
        $("#show-number").html("<h2>" + "Time Left: " + number + "</h2>");

        if (number === 0) {
            stop();
            currentQuestion++;
            currentImage++;
        }
    }

    function stop() {
        clearInterval(intervalId);
        intervalId = 0;
    }

    function resetQuiz() {
        currentQuestion = 0;
        correctAnswers = 0;
        currentImage = 0;
        hideScore();
    }

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored " + correctAnswers + " out of " + trivia.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}