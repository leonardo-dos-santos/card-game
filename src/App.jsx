import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import CardGrid from "./components/CardGrid/CardGrid";
import { useBestScore } from "./hooks/useBestScore";
import { fetchGifs } from "./lib/giphy";
import { shuffleArray } from "./lib/shuffleArray";

export default function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const { bestScore, updateBestScore } = useBestScore();
  const [prevCard, setPrevCard] = useState(null); // carta anterior
  const [tempFlipped, setTempFlipped] = useState([]); // carta clicada temporária
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  // ---- Carrega GIFs
  useEffect(() => {
    async function loadGifs() {
      setLoading(true);
      const gifs = await fetchGifs("No Country for Old Men", 4); // 4 GIFs → 8 cartas
      const duplicated = gifs.flatMap((g) => [
        { ...g, id: g.id + "_1" },
        { ...g, id: g.id + "_2" },
      ]);
      setCards(shuffleArray(duplicated));
      setLoading(false);
    }
    loadGifs();
  }, []);

  // ---- Clique na carta
  const handleCardClick = (id) => {
    if (isProcessing) return;

    const clicked = cards.find(c => c.id === id);
    if (!clicked) return;

    // Avalia score imediatamente
    if (prevCard) {
      if (prevCard.title !== clicked.title) {
        setScore(prev => {
          const next = prev + 1;
          updateBestScore(next);
          return next;
        });
      } else {
        setScore(0);
      }
    }

    // Atualiza referência da carta clicada para comparar no próximo clique
    setPrevCard(clicked);

    // Flip temporário da carta clicada
    setTempFlipped([id]);
    setIsProcessing(true);

    // Flip + shuffle de todas as cartas após delay
    setCards(prev => prev.map(c => ({ ...c, isFlipped: false })));
    setTimeout(() => {
      setCards(prev => shuffleArray(prev.map(c => ({ ...c, isFlipped: true }))));
      setTempFlipped([]);
      setIsProcessing(false);
    }, 1000);
  };

  // ---- Reset geral
  const handleReset = () => {
    setScore(0);
    setPrevCard(null);
    setTempFlipped([]);
    setCards((prev) => shuffleArray(prev.map((c) => ({ ...c, isFlipped: true }))));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-slate-50">
      <Header />
      <div className="mb-6">
        <Scoreboard score={score} bestScore={bestScore} onReset={handleReset} />
      </div>
      <section className="py-8">
        <CardGrid
          cards={cards.map((c) => {
            let status = "normal";
            if (tempFlipped.includes(c.id)) status = "selected"; // dourada
            else if (tempFlipped.length > 0 && !tempFlipped.includes(c.id))
              status = "dimmed"; // cinza

            return {
              ...c,
              status,
              isFlipped: c.isFlipped,
            };
          })}
          onCardClick={handleCardClick}
          isLoading={loading}
        />
      </section>
    </div>
  );
}
