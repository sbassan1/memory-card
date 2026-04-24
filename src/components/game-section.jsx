import Card from './card'
import './GameSection.css'

function GameSection() {
    // Dummy data for demonstration
    const cards = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/seed/${i + 1}/300/450`
    }));

    return (
        <section className="game-section">
            <div className="card-grid">
                {cards.map(card => (
                    <Card key={card.id} id={card.id} src={card.src} />
                ))}
            </div>
        </section>
    );
}

export default GameSection