import './Card.css';

function Card({ id, src, onClick }) {
    return (
        <div className="card" id={id} onClick={() => onClick && onClick(id)}>
            <div className="card-inner">
                <img src={src} alt={`Memory card ${id}`} />
            </div>
        </div>
    );
}

export default Card;