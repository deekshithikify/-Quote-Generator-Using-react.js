
import { useState } from 'react';
import './App.css';


const quotes = [
  { text: "Believe in yourself.", author: "Anonymous" },
  { text: "Work hard in silence.", author: "Frank Ocean" },
  { text: "Every day is a second chance.", author: "Oprah Winfrey" },
  { text: "Never give up.", author: "Elon Musk" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Truth is the source of strength.", author: "Kuvempu" },
  { text: "You are born to succeed, not to fail.", author: "Dr. Rajkumar" },
  { text: "Life should be meaningful, not just long.", author: "Kuvempu" },
  { text: "The Earth belongs equally to all beings.", author: "Kuvempu" },
  { text: "Our language is our identity.", author: "Da. Ra. Bendre" },
  { text: "Silence is the best answer.", author: "D.V. Gundappa (DVG)" },
  { text: "Knowledge is the true path.", author: "Basavanna" },
  { text: "Man himself is God.", author: "Kuvempu" },
  { text: "Only when you change can you see the new.", author: "U.R. Ananthamurthy" },
  { text: "Self-respect is man’s strength.", author: "Dr. B.R. Ambedkar" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <div className="quote-box">
        <h2>"{quote.text}"</h2>
        <p>- {quote.author}</p>
        <button onClick={generateQuote}>New Quote</button>
      </div>

      <footer className="footer">
        <p>Made by ❤️<strong>Coding Utsava</strong></p>
      </footer>
    </div>
  );
}

export default App;

