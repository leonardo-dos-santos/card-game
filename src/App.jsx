import { useState } from 'react'
import Header from './components/Header/Header'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import useBestScore from './hooks/useBestScore'

export default function App() { 
  const [ score, setScore ] = useState(0)
  const { bestScore, updateBestScore } = useBestScore()
  
  const handleCardClick = (id) => { 
    const next = score + 1
    setScore(next)
    updateBestScore(next)
  }

  const handleReset = () => {
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-50">
      <Header />
      <div className='mt-6'>
        <ScoreBoard score={score} bestScore={bestScore} onReset={handleReset} />
      </div>
    </div>
  )
}