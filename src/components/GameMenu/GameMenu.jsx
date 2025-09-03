import { useState } from 'react';

export default function GameMenu({ onStartGame }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [hoverDifficulty, setHoverDifficulty] = useState(null);

  const difficulties = [
    { id: 'easy', label: 'Fácil', cards: 4, description: '4 cartas - Para iniciantes' },
    { id: 'medium', label: 'Médio', cards: 6, description: '6 cartas - Desafio moderado' },
    { id: 'hard', label: 'Difícil', cards: 8, description: '8 cartas - Para experts' },
  ];

  const handleStartGame = () => {
    if (selectedDifficulty) {
      const difficulty = difficulties.find(d => d.id === selectedDifficulty);
      onStartGame(difficulty);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-gradient-to-b from-[#3c2a1a] to-[#2c1b0e] rounded-xl border-2 border-[#8b5a2b] shadow-2xl p-6 md:p-8 animate-scaleIn">
        <h2 className="western-title text-center text-3xl md:text-4xl mb-6">No Country For Cards</h2>
        
        <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent mx-auto mb-6"></div>
        
        <p className="text-center text-amber-100/80 mb-8 font-orbitron text-sm md:text-base">
          Teste sua memória neste jogo de cartas com tema western.
          <br />Escolha uma dificuldade para começar:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${selectedDifficulty === diff.id 
                ? 'border-amber-500 bg-gradient-to-br from-[#3c2a1a] to-[#2c1b0e] shadow-[0_0_15px_rgba(245,158,11,0.5)]' 
                : 'border-[#8b5a2b]/50 bg-[#2c1b0e]/50 hover:border-[#8b5a2b] hover:bg-[#3c2a1a]/70'}`}
              onClick={() => setSelectedDifficulty(diff.id)}
              onMouseEnter={() => setHoverDifficulty(diff.id)}
              onMouseLeave={() => setHoverDifficulty(null)}
            >
              <h3 className="text-xl font-orbitron text-amber-500 mb-2">{diff.label}</h3>
              <p className="text-amber-100/70 text-sm">{diff.description}</p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-1 left-1 text-amber-500/70 text-xs">★</div>
              <div className="absolute top-1 right-1 text-amber-500/70 text-xs">★</div>
              <div className="absolute bottom-1 left-1 text-amber-500/70 text-xs">★</div>
              <div className="absolute bottom-1 right-1 text-amber-500/70 text-xs">★</div>
            </button>
          ))}
        </div>
        
        <button 
          onClick={handleStartGame}
          disabled={!selectedDifficulty}
          className={`w-full py-3 rounded-lg font-orbitron text-lg transition-all duration-300 ${selectedDifficulty 
            ? 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-amber-100 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:from-amber-600 hover:to-amber-600' 
            : 'bg-[#3c2a1a]/50 text-amber-100/50 cursor-not-allowed'}`}
        >
          INICIAR JOGO
        </button>
        
        {/* Decorative elements */}
        <div className="flex justify-between mt-6">
          <span className="text-2xl">🤠</span>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent self-center"></div>
          <span className="text-2xl">🌵</span>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent self-center"></div>
          <span className="text-2xl">🏜️</span>
        </div>
      </div>
    </div>
  );
}