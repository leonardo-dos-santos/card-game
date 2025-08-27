import { useState, useEffect } from 'react'

export function useBestScore() {
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('bestScore')
    if (saved) {
      setBestScore(Number(saved))
    }
  }, [])

  const updateBestScore = (score) => {
    if (score > bestScore) {
      setBestScore(score)
      localStorage.setItem('bestScore', score.toString())
    }
  }

  return { bestScore, updateBestScore }
}
