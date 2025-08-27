import Card from "../Card/Card";

export default function CardGrid({ cards, onCardClick, isLoading }) {
  if (isLoading) {
    const skeletons = Array.from({ length: 8 });
    return (
      <div className="max-w-5x1 mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skeletons.map((_, i) => (
          <div key={i} className="animate-pulse bg-slate-100 rounded-2xl aspect-square" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} isFlipped={card.isFlipped} onClick={onCardClick} />
      ))}
    </div>
  );
}
