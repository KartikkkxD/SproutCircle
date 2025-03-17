"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NumberNinja() {
  const [currentNumber, setCurrentNumber] = useState("")
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    if (gameStarted && !gameOver) {
      setCurrentNumber(getRandomNumber())
    }
  }, [gameStarted, gameOver])

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10).toString()
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (gameOver) return

    if (event.key === currentNumber) {
      setScore(score + 1)
      setCurrentNumber(getRandomNumber())
    } else {
      setLives(lives - 1)
      if (lives - 1 === 0) {
        setGameOver(true)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, []) // Removed handleKeyPress from dependency array

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setLives(3)
    setGameOver(false)
    setCurrentNumber(getRandomNumber())
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Number Ninja</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {!gameStarted ? (
          <Button onClick={startGame}>Start Game</Button>
        ) : (
          <>
            <div className="text-6xl font-bold">{currentNumber}</div>
            <div>Score: {score}</div>
            <div>Lives: {lives}</div>
            {gameOver && (
              <div>
                <p>Game Over! Your final score: {score}</p>
                <Button onClick={startGame} className="mt-4">
                  Play Again
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}

