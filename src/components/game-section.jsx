import Card from './card'
import './GameSection.css'

function GameSection({ Cards, onCardClick }) {
    return (
        <section className="game-section">
            <div className="card-grid">
                {Cards.map(card => (
                    <Card 
                        key={card.id} 
                        id={card.id} 
                        src={card.src} 
                        onClick={onCardClick} 
                    />
                ))}
            </div>
        </section>
    );
}

export default GameSection