import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Scoreboard from "./components/ScoreBoard/ScoreBoard";
import CardGrid from "./components/CardGrid/CardGrid";
import GameMenu from "./components/GameMenu/GameMenu";
import GameOver from "./components/GameOver/GameOver";
import { useBestScore } from "./hooks/useBestScore";
import { fetchGifs } from "./lib/giphy";
import { shuffleArray } from "./lib/shuffleArray";


export default function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'gameover'
  const [difficulty, setDifficulty] = useState(null);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const { bestScore, updateBestScore } = useBestScore();
  const [prevCard, setPrevCard] = useState(null); // carta anterior
  const [tempFlipped, setTempFlipped] = useState([]); // carta clicada temporária
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  // ---- Carrega GIFs com base na dificuldade
  useEffect(() => {
    async function loadGifs() {
      if (!difficulty) return;
      
      setLoading(true);
      // Número de GIFs baseado na dificuldade (metade do número de cartas)
      const numGifs = difficulty.cards / 2;
      const gifs = await fetchGifs("No Country for Old Men", numGifs);
      const duplicated = gifs.flatMap((g) => [
        { ...g, id: g.id + "_1" },
        { ...g, id: g.id + "_2" },
      ]);
      setCards(shuffleArray(duplicated));
      setLoading(false);
    }
    
    if (gameState === 'playing') {
      loadGifs();
    }
  }, [difficulty, gameState]);

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
        // Mostra tela de game over quando o score é zerado
        setGameState('gameover');
        return;
      }
    }

    // Atualiza referência da carta clicada para comparar no próximo clique
    setPrevCard(clicked);

    // Flip temporário da carta clicada
    setTempFlipped([id]);
    setIsProcessing(true);

    // Mantém as cartas visíveis e apenas embaralha após o delay
    setTimeout(() => {
      setCards(prev => shuffleArray([...prev]));
      setTempFlipped([]);
      setIsProcessing(false);
    }, 1000);
  };

  // ---- Reset geral
  const handleReset = () => {
    setScore(0);
    setPrevCard(null);
    setTempFlipped([]);
    setCards((prev) => shuffleArray([...prev]));
  };
  
  // ---- Iniciar jogo com dificuldade selecionada
  const handleStartGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setScore(0);
    setPrevCard(null);
    setTempFlipped([]);
    setGameState('playing');
  };
  
  // ---- Reiniciar jogo com mesma dificuldade
  const handleRestartGame = () => {
    setScore(0);
    setPrevCard(null);
    setTempFlipped([]);
    setCards((prev) => shuffleArray([...prev]));
    setGameState('playing');
  };
  
  // ---- Voltar ao menu principal
  const handleBackToMenu = () => {
    setGameState('menu');
    setDifficulty(null);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 text-primary-50 font-poppins flex flex-col">
      {gameState === 'menu' && (
        <GameMenu onStartGame={handleStartGame} />
      )}
      
      {gameState === 'playing' && (
        <>
          <Header />
          <main className="flex-1 flex flex-col px-2 sm:px-4">
            <div className="py-2 sm:py-4">
              <Scoreboard score={score} bestScore={bestScore} onReset={handleReset} />
            </div>
            <section className="flex-1 relative">
              {/* Efeito de brilho decorativo */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-400/20 rounded-full filter blur-3xl"></div>
              
              <CardGrid
                cards={cards.map((c) => {
                  let status = "normal";
                  
                  // Se há uma carta clicada, todas viram
                  if (tempFlipped.length > 0) {
                    status = "selected"; // todas viram
                    
                    // A carta clicada recebe um status especial
                    if (tempFlipped.includes(c.id)) {
                      status = "highlighted"; // destaque especial para a carta clicada
                    }
                  }

                  return {
                    ...c,
                    status
                  };
                })}
                onCardClick={handleCardClick}
                isLoading={loading}
              />
            </section>
          </main>
        </>
      )}
      
      {gameState === 'gameover' && (
        <GameOver 
          score={score} 
          bestScore={bestScore} 
          onRestart={handleRestartGame} 
          onBackToMenu={handleBackToMenu} 
        />
      )}
    </div>
  );
}
