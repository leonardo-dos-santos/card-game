import React from 'react';

export default function GameOver({ score, bestScore, onRestart, onBackToMenu }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gradient-to-b from-[#3c2a1a] to-[#2c1b0e] rounded-xl border-2 border-[#8b5a2b] shadow-2xl p-6 md:p-8 animate-fadeIn">
        <h2 className="western-title text-center text-3xl mb-2">Fim de Jogo</h2>
        
        <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent mx-auto mb-4"></div>
        
        <div className="text-center mb-6">
          <p className="text-amber-100/80 mb-4 font-orbitron">
            Você perdeu, parceiro! Mas não desista da caçada.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#2c1b0e]/70 border border-[#8b5a2b]/50 rounded-lg p-3">
              <p className="text-amber-500/90 text-sm">Pontuação</p>
              <p className="text-2xl font-orbitron text-amber-100">{score}</p>
            </div>
            <div className="bg-[#2c1b0e]/70 border border-[#8b5a2b]/50 rounded-lg p-3">
              <p className="text-amber-500/90 text-sm">Melhor</p>
              <p className="text-2xl font-orbitron text-amber-100">{bestScore}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button 
            onClick={onRestart}
            className="w-full py-3 rounded-lg font-orbitron text-lg transition-all duration-300 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-amber-100 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:from-amber-600 hover:to-amber-600"
          >
            JOGAR NOVAMENTE
          </button>
          
          <button 
            onClick={onBackToMenu}
            className="w-full py-3 rounded-lg font-orbitron text-lg transition-all duration-300 bg-[#2c1b0e] border border-[#8b5a2b]/70 text-amber-100/90 hover:bg-[#3c2a1a] hover:border-[#8b5a2b]"
          >
            VOLTAR AO MENU
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-6 space-x-4">
          <span className="text-2xl animate-bounce-slow">🤠</span>
          <span className="text-2xl animate-pulse">💰</span>
          <span className="text-2xl animate-bounce-slow">🏜️</span>
        </div>
      </div>
    </div>
  );
}