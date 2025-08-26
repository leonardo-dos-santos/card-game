export default function ScoreBoard({ score, bestScore, onReset }) { 
  return ( 
    <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div>
          <div className="text-xs text-slate-500">Score</div>
          <div className="text-2x1 font-semibold">{score}</div>
        </div>
        <div className="text-xs test-slate-500">BEST</div>
        <div className="text-2x1 font-semibold">{bestScore}</div>
      </div>
      <div>
        <button
          onClick={onReset}
          className="px-3 py-1 rounded-2x1 border shadow-sm text-sm hover:bg-slate-50"
          arial-label="Reset game"
        >
          Reset
        </button>
      </div>
    </div>
  )
}