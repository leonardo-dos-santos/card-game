export default function ScoreBoard({ score, bestScore, onReset }) { 
  return ( 
    <div className="flex justify-center items-center gap-8 mb-6 font-orbitron">
      <div className="text-center">
        <div className="text-sm text-gray-400 uppercase tracking-wider">Score</div>
        <div className="text-3xl font-bold text-scoreGreen">{score}</div>
      </div>

      {/* Separador */}
      <div className="h-10 w-px bg-gray-500/30"></div>

      <div className="text-center">
        <div className="text-sm text-gray-400 uppercase tracking-wider">Best</div>
        <div className="text-3xl font-bold text-bestYellow">{bestScore}</div>
      </div>

      {/* Separador */}
      <div className="h-10 w-px bg-gray-500/30"></div>

      <button
        onClick={onReset}
        className="px-4 py-2 ml-6 rounded-2xl border shadow-sm text-sm font-roboto hover:bg-buttonHover cursor-pointer"
        aria-label="Reset game"
      >
        Reset
      </button>
    </div>
  )
}
