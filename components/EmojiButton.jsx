import { decode } from "html-entities";

export default function EmojiButton({
  emoji,
  name,
  index,
  handleClick,
  isSelected,
  isMatched
}) {
  const displayEmoji = typeof emoji === 'object' 
    ? (emoji.unicode || decode(emoji.htmlCode || "")) 
    : decode(emoji);
  
  function handleCardClick() {
    if (!isSelected && !isMatched) {
      handleClick(name, index);
    }
  }
  
  return (
    <button
      className={`btn btn--emoji ${isSelected ? "btn--emoji__back--selected" : isMatched ? "btn--emoji__back--matched" : "btn--emoji__front"}`}
      onClick={handleCardClick}
      disabled={isMatched}
      aria-label={isSelected || isMatched ? `${name} emoji` : "Click to reveal card"}
    >
      {isSelected || isMatched ? displayEmoji : ""}
    </button>
  );
}