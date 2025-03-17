"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Clock } from "lucide-react"
import AlphabetAdventure from "./alphabet-adventure"
import NumberNinja from "./number-ninja"
import ColorQuest from "./color-quest"

const games = [
  { id: 1, name: "Alphabet Adventure", description: "Learn letters through fun challenges!" },
  { id: 2, name: "Number Ninja", description: "Master counting and basic math skills!" },
  { id: 3, name: "Color Quest", description: "Explore the world of colors and shapes!" },
]

const DAILY_LIMIT = 90 * 60 * 1000 // 1h 30min in milliseconds

export default function LearningGames() {
  const [timeSpent, setTimeSpent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedGame, setSelectedGame] = useState<number | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && timeSpent < DAILY_LIMIT) {
      interval = setInterval(() => {
        setTimeSpent((prev) => {
          const newTime = prev + 1000
          if (newTime >= DAILY_LIMIT) {
            setIsPlaying(false)
            setSelectedGame(null)
          }
          return Math.min(newTime, DAILY_LIMIT)
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, timeSpent])

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handlePlayGame = (gameId: number) => {
    if (timeSpent < DAILY_LIMIT) {
      setIsPlaying(true)
      setSelectedGame(gameId)
    }
  }

  const handleStopGame = () => {
    setIsPlaying(false)
    setSelectedGame(null)
  }

  return (
    <div className="space-y-4">
      <Card className="bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-green-700 flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Daily Game Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-800">{formatTime(timeSpent)} / 1:30:00</span>
            <span className="text-green-800">{Math.round((timeSpent / DAILY_LIMIT) * 100)}%</span>
          </div>
          <Progress value={(timeSpent / DAILY_LIMIT) * 100} className="w-full" />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <Card key={game.id} className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-green-700 flex items-center">
                <Gamepad2 className="mr-2 h-5 w-5" />
                {game.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 text-green-800">{game.description}</p>
              {isPlaying && selectedGame === game.id ? (
                <>
                  {game.id === 1 && <AlphabetAdventure />}
                  {game.id === 2 && <NumberNinja />}
                  {game.id === 3 && <ColorQuest />}
                  <Button onClick={handleStopGame} className="mt-4">
                    Stop Playing
                  </Button>
                </>
              ) : (
                <Button onClick={() => handlePlayGame(game.id)} disabled={timeSpent >= DAILY_LIMIT}>
                  Play Now
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

