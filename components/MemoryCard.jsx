import EmojiButton from "./EmojiButton"

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {
    console.log("Memory Card Data:", data);
    
    function isCardSelected(index) {
        return selectedCards.some(card => card.index === index)
    }
    
    function isCardMatched(index) {
        return matchedCards.some(card => card.index === index)
    }
    
    const allCards = data.map((item, index) => {
        const emoji = item.htmlCode || item.unicode || item;
        const name = item.name || `card-${index}`;
        
        return (
            <li 
                key={index} 
                className={`card-item ${isCardSelected(index) ? "card-item--selected" : ""} ${isCardMatched(index) ? "card-item--matched" : ""}`}
            >
                <EmojiButton
                    emoji={emoji}
                    name={name}
                    index={index}
                    handleClick={handleClick}
                    isSelected={isCardSelected(index)}
                    isMatched={isCardMatched(index)}
                />
            </li>
        )
    })
    
    return (
        <ul className="card-container">
            {allCards}
        </ul>
    )
}