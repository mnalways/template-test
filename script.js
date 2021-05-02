const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorContainer = document.getElementById('author');
const newQuoteButton = document.getElementById('newQuote');
const twitterButton = document.getElementById('twitter');


let allQuotes = [];

function newQuote() {
    const index = Math.floor(Math.random() * allQuotes.length);
    const element = allQuotes[index];
    console.log(element);
    quoteText.textContent = element.text;
    if(!element.author) {
        authorContainer.textContent = "Unknown";
    } else {
        authorContainer.textContent = element.author;
    }
    // return quote;
}

async function getQuotes() {
    const url = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(url);
        allQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert("error");
    }
    console.log(allQuotes);
}

function tweetQuote() {
    const url = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorContainer.textContent}`;
    window.open(url,'_blank');
}

newQuoteButton.addEventListener('click',newQuote);
twitterButton.addEventListener('click',tweetQuote);


getQuotes();