const randomButton = document.getElementById("random-quote");
const quoteDisplay = document.getElementById('quote');
const adviceDisplay = document.getElementById('advice-id');

function giveRandomQuote (){
    fetch('https://randommarvelquoteapi.herokuapp.com')
        .then(response => response.json())
        .then(data => {
            quoteDisplay.innerHTML = data.quote;
            adviceDisplay.innerHTML = Math.floor(Math.random() * 1000);
        });
}

window.onload = giveRandomQuote();
randomButton.addEventListener('click', giveRandomQuote);