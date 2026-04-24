import { useState } from 'react'
import './App.css'
import GameSection from './components/game-section'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
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
        <GameSection />
      </main>
    </div>
  )
}

export default App
