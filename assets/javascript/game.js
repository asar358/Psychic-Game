var compChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

    var wins = 0;
    var losses = 0;
    var ties = 0;
    var guessRemaining = 10
    var guessSoFar = [];

    alert("Press Enter Key To Get Started");

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
        var computerGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
        guessSoFar.push(userGuess);
        console.log(userGuess, computerGuess);

        if (userGuess == computerGuess) {
            wins++;
            guessRemaining = 9;
            guessSoFar.length = 0;
        }
        else if (guessRemaining == 0){
            losses++;
            guessRemaining = 9;
            guessSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            guessRemaining--; 
        }  

        var html = "<h1>Psychic Game</h1>" + "<br>" + "<br>" + "<br>" + "<br>" +
        "<h2>Read My Computer Mind!!</h2>" + "<br>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" + "<br>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" + "<br>" +
        "<p>Guesses Left: " + 
        guessRemaining + 
        "</p>" + "<br>" +
        "<p>Your Guesses so far: " +
        guessSoFar +
        "</p>"
        ;
        
        document.querySelector('#game').innerHTML = html;
    };
