const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', displayAnswer);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let answer = '';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
        displayQuote(json['question']);
        answer = json['answer'];
        document.querySelector('#js-answer-text').textContent = '';
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

getQuote();
