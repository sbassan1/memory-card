import { useState } from 'react'
import './App.css'
import GameSection from './components/game-section'

function GenerateCards() {
    return Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/seed/${i + 1}/300/450`
    }));
}

function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function App() {
  const [cards, setCards] = useState(GenerateCards())
  const [clickedCardIds, setClickedCardIds] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const handleCardClick = (id) => {
    if (clickedCardIds.includes(id)) {
        setCurrentScore(0);
        setClickedCardIds([]);
        alert('Game Over! You clicked the same card twice.');
    } else {
        const newScore = currentScore + 1;
        setCurrentScore(newScore);
        setClickedCardIds([...clickedCardIds, id]);
        
        if (newScore > highScore) {
            setHighScore(newScore);
        }

        if (newScore === cards.length) {
            alert('Congratulations! You clicked all cards once!');
            setCurrentScore(0);
            setClickedCardIds([]);
        }
    }
    setCards(shuffle(cards));
  }
  
  return (
    <div className="app-container">
      <header id="header">
        <div className="header-content">
          <h1>Memory Card Game</h1>
          <p>
            Try to press all cards once without repeating!
          </p>
        </div>
        <div className="score-board">
            <div className="score">
                <span>Score</span>
                <strong>{currentScore}</strong>
            </div>
            <div className="score">
                <span>Best</span>
                <strong>{highScore}</strong>
            </div>
        </div>
      </header>

      <main>
        <GameSection Cards={cards} onCardClick={handleCardClick} />
      </main>
    </div>
  )
}

export default App
