export default function Card({ card, onClick }) {
  return (
    <div
      onClick={() => onClick(card.id)}
      className={`
        relative aspect-square rounded-2xl cursor-pointer transition-all duration-300 
        ${card.status === "selected" ? "bg-yellow-400 shadow-lg scale-105" : ""} 
        ${card.status === "dimmed" ? "bg-gray-500/70" : "bg-white"}
      `}
    >
      {card.isFlipped ? (
        <img
          src={card.imgUrl} // corrigido de card.url para card.imgUrl
          alt={card.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-4xl">
          ❓
        </div>
      )}
    </div>
  );
}
