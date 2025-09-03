export default function ScoreBoard({ score, bestScore, onReset }) { 
  return ( 
    <div className="flex justify-center items-center gap-8 mb-8 font-orbitron bg-[#2c1b0e]/80 backdrop-blur-sm py-4 px-6 rounded-xl shadow-lg max-w-2xl mx-auto border-2 border-[#8b5a2b] relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2244%22%20height%3D%2212%22%20viewBox%3D%220%200%2044%2012%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M20%2012v-2L0%200v10l4%202h16zm18%200l4-2V0L22%2010v2h16zM20%200v8L4%200h16zm18%200L22%208V0h16z%22%20fill%3D%22%23d4a85a%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="text-sm text-[#d4a85a] uppercase tracking-wider font-semibold mb-1">Score</div>
        <div className="text-4xl font-bold text-white drop-shadow-md bg-[#2c1b0e] py-2 px-4 rounded-lg border border-[#8b5a2b] min-w-[80px]">
          {score}
        </div>
      </div>

      {/* Separador */}
      <div className="h-16 w-px bg-[#8b5a2b]"></div>

      <div className="text-center relative z-10">
        <div className="text-sm text-[#d4a85a] uppercase tracking-wider font-semibold mb-1">Best</div>
        <div className="text-4xl font-bold text-[#fbbf24] drop-shadow-md bg-[#2c1b0e] py-2 px-4 rounded-lg border border-[#8b5a2b] min-w-[80px]">
          {bestScore}
        </div>
      </div>

      {/* Separador */}
      <div className="h-16 w-px bg-[#8b5a2b]"></div>

      <button
        onClick={onReset}
        className="px-5 py-3 ml-6 rounded-lg bg-[#8b5a2b] hover:bg-[#a67c52] text-white shadow-md text-sm font-rubik font-medium transition-all duration-300 border-2 border-[#d4a85a]/50 hover:scale-105 relative overflow-hidden group"
        aria-label="Reset game"
      >
        <span className="relative z-10">Reset Game</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#b7410e]/0 via-[#b7410e]/30 to-[#b7410e]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  )
}
