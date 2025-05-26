var quotes = [
  {
    text: "So many books, so little time",
    author: "Frank Zappa",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein",
  },
  {
    text: "A room without books is like a body without a soul",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on",
    author: "Robert Frost",
  },
  {
    text: "If you tell the truth, you don't have to remember anything",
    author: "Mark Twain",
  },
  {
    text: "A friend is someone who knows all about you and still loves you",
    author: "Elbert Hubbard",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all",
    author: "Oscar Wilde",
  },
  {
    text: "Without music, life would be a mistake",
    author: "Friedrich Nietzsche",
  },
  {
    text: "It is our choices that show what we truly are, far more than our abilities",
    author: "J.K. Rowling",
  },
  {
    text: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
];

var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");
var newQuoteBtn = document.getElementById("new-quote-btn");

var lastRandomIndex = -1;

function getRandomQuoteIndex() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastRandomIndex && quotes.length > 1);

  lastRandomIndex = randomIndex;
  return randomIndex;
}

function displayNewQuote() {
  var randomIndex = getRandomQuoteIndex();
  var quote = quotes[randomIndex];

  quoteText.style.opacity = "0";
  quoteAuthor.style.opacity = "0";

  setTimeout(() => {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `- ${quote.author}`;
    quoteText.style.opacity = "1";
    quoteAuthor.style.opacity = "1";
  }, 300);
}

quoteText.style.transition = "opacity 0.3s ease";
quoteAuthor.style.transition = "opacity 0.3s ease";
