import Card from "../Card/Card";

export default function CardGrid({ cards, onCardClick, isLoading }) {
  if (isLoading) {
    // Número de skeletons baseado no número de cartas ou padrão 8
    const skeletons = Array.from({ length: cards.length || 8 });
    return (
      <div className={`w-full h-full px-4 grid gap-4 sm:gap-6 max-w-6xl mx-auto ${cards.length <= 4 ? 'grid-cols-2 sm:grid-cols-2' : cards.length <= 6 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {skeletons.map((_, i) => (
          <div 
            key={i} 
            className="animate-pulse bg-gradient-to-br from-[#3c2a1a]/50 to-[#2c1b0e]/50 rounded-2xl aspect-square shadow-md border-2 border-[#8b5a2b]/30 max-w-[200px] mx-auto w-full" 
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full px-4 py-6">
      {/* Decoração de fundo */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#8b5a2b]/10 text-9xl font-orbitron font-bold -rotate-90 pointer-events-none select-none">CARDS</div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#8b5a2b]/10 text-9xl font-orbitron font-bold rotate-90 pointer-events-none select-none">CARDS</div>
      
      <div className={`w-full h-full grid gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto relative z-10 ${cards.length <= 4 ? 'grid-cols-2 sm:grid-cols-2' : cards.length <= 6 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
        {cards.map((card) => (
          <div key={card.id} className="max-w-[200px] mx-auto w-full transform hover:-translate-y-1 transition-transform duration-300">
            <Card card={card} onClick={onCardClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
