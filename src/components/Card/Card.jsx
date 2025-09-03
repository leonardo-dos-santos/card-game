export default function Card({ card, onClick }) {
  return (
    <div
      onClick={() => onClick(card.id)}
      className={`
        card-flip relative aspect-square cursor-pointer transition-all duration-300 
        ${card.status === "selected" ? "selected shadow-lg" : ""} 
        ${card.status === "highlighted" ? "selected highlighted shadow-xl" : ""}
        ${card.status === "dimmed" ? "opacity-60" : ""}
      `}
    >
      <div className="card-flip-inner relative w-full h-full rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform-gpu">
        <div className="card-back rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[#2c1b0e] opacity-30 z-10"></div>
          <div className="absolute inset-0 border-[6px] border-[#8b5a2b] rounded-2xl z-20 pointer-events-none"></div>
          <img
            src={card.imgUrl}
            alt={card.title}
            className="w-full h-full object-cover rounded-2xl transform transition-transform hover:scale-110 hover:rotate-2 duration-300 sepia-[0.3] contrast-125"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'translateZ(0)',
            }}
          />
        </div>
        
        <div className="card-front bg-gradient-to-br from-[#3c2a1a] to-[#2c1b0e] rounded-2xl flex items-center justify-center transition-all duration-300">
          <div className="text-5xl">
            {card.status === "highlighted" ? 
              "🌟" : 
              "🤠"}
          </div>
          <div className="absolute inset-0 rounded-2xl border-2 border-[#8b5a2b]">
            <div className="absolute top-2 left-2 text-[#d4a85a] text-xs font-orbitron">A♠</div>
            <div className="absolute bottom-2 right-2 text-[#d4a85a] text-xs font-orbitron">A♠</div>
          </div>
        </div>
      </div>
    </div>
  );
}
