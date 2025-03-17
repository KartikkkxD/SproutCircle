"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const colors = {
  RED: "#FF0000",
  GREEN: "#00FF00",
  BLUE: "#0000FF",
  YELLOW: "#FFFF00",
  ORANGE: "#FFA500",
  PURPLE: "#800080",
  PINK: "#FFC0CB",
  BROWN: "#A52A2A",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  GRAY: "#808080",
  CYAN: "#00FFFF",
}

const colorNames = Object.keys(colors)

export default function ColorQuest() {
  const [currentColor, setCurrentColor] = useState("")
  const [displayColor, setDisplayColor] = useState("")
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    if (gameStarted && !gameOver) {
      setNewRound()
    }
  }, [gameStarted, gameOver])

  const setNewRound = () => {
    const newColor = colorNames[Math.floor(Math.random() * colorNames.length)]
    setCurrentColor(newColor)
    // Ensure the display color is different from the current color
    let newDisplayColor
    do {
      newDisplayColor = colorNames[Math.floor(Math.random() * colorNames.length)]
    } while (newDisplayColor === newColor)
    setDisplayColor(newDisplayColor)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (gameOver) return

    if (event.key.toUpperCase() === currentColor[0]) {
      setScore(score + 1)
      setNewRound()
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
  }, [handleKeyPress, currentColor, lives, score]) // Added handleKeyPress to dependencies

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setLives(3)
    setGameOver(false)
    setNewRound()
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Color Quest</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {!gameStarted ? (
          <Button onClick={startGame}>Start Game</Button>
        ) : (
          <>
            <div className="text-4xl font-bold mb-4" style={{ color: colors[displayColor as keyof typeof colors] }}>
              {currentColor}
            </div>
            <p className="mb-2">Press the first letter of the color name shown above.</p>
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

