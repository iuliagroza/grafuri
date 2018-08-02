var questions = [{
    question: "Care este numărul minim de vârfuri pe care îl poate avea un graf cu 12 muchii si care conține 3 componente conexe si niciun vârf izolat:",
    choices: ["8", "10", "11", "9"],
    correctAnswer: 3
}, {
    question: "Se consideră un graf cu 26 de vârfuri etichetate distinct cu literele din alfabetul englez. Se știe că orice vârf etichetat cu o vocală este adiacent cu toate vârfurile etichetate cu consoană și orice vârf etichetat cu o consoană este adiacent cu toate vârfurile etichetate cu vocală. Câte muchii are graful?",
    choices: ["26", "210", "105", "21"],
    correctAnswer: 2
}, {
    question: "Numărul maxim de arce într-un graf orientat cu n vârfuri este:",
    choices: ["n*n-1", "n*(n+1)", "n*(n-1)/2", "n*(n-1)"],
    correctAnswer: 3
}, {
    question: "Câte grafuri orientate cu n vârfuri există?",
    choices: ["2^(n*n)-1", "2^(n*(n-1))", "n*(n-1)", "2^(n*(n+1))"],
    correctAnswer: 1
}, {
    question: "Numărul total de grafuri turneu cu n vârfuri este:",
    choices: ["2^(n*(n-1)/2)", "3^(n*(n-1))", "2^(n*(n-1))", "3^(n*(n-1)/2)"],
    correctAnswer: 0
}, {
    question: "Dacă toate vârfurile unui graf conex sunt de grad par atunci:",
    choices: ["este hamiltonian", "este eulerian", "este bipartit", "este arbore"],
    correctAnswer: 1
}, {
    question: "Se dă graful cu 5 vârfuri definit prin mulțimea muchiilor M={[1,2],[2,3],[3,4],[4,5]}. Care este numărul minim de muchii ce trebuie adăugate pentru ca graful să fie hamiltonian, dar nu eulerian?",
    choices: ["2", "1", "0", "3"],
    correctAnswer: 0
}, {
    question: "Fie un graf cu 12 vârfuri și 5 componente conexe. Care este numărul maxim de muchii pe care le poate avea graful?",
    choices: ["35", "132", "21", "28"],
    correctAnswer: 3
}, {
    question: "Numărul total de subgrafuri obținute dintr-un graf cu n vârfuri este:",
    choices: ["2^n-1", "2^(n-1)", "2^n-2", "2^n"],
    correctAnswer: 0
}, {
    question: "Care este numărul minim de muchii ale unui graf neorientat cu 24 de vârfuri astfel încât acesta să fie conex indiferent de dispunerea muchiilor?",
    choices: ["24", "254", "276", "253"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Selectează un răspuns.");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Vrei să refaci quizul?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Următoarea întrebare");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Scorul tău: " + correctAnswers + " din " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}