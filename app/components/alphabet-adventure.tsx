"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AlphabetAdventure() {
  const [currentLetter, setCurrentLetter] = useState("")
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    if (gameStarted && !gameOver) {
      setCurrentLetter(getRandomLetter())
    }
  }, [gameStarted, gameOver])

  const getRandomLetter = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (gameOver) return

    if (event.key.toUpperCase() === currentLetter) {
      setScore(score + 1)
      setCurrentLetter(getRandomLetter())
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
  }, [handleKeyPress]) // Added handleKeyPress to dependencies

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setLives(3)
    setGameOver(false)
    setCurrentLetter(getRandomLetter())
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Alphabet Adventure</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {!gameStarted ? (
          <Button onClick={startGame}>Start Game</Button>
        ) : (
          <>
            <div className="text-6xl font-bold">{currentLetter}</div>
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

