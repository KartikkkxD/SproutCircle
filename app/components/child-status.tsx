"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

type Status = {
  activity: string
  mood: "Happy" | "Neutral" | "Upset"
  lastUpdate: string
}

export default function ChildStatus() {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch("/api/child-status")
      const data = await res.json()
      setStatus(data)
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!status) return <div>Loading...</div>

  return (
    <div className="space-y-2">
      <div>
        <strong>Current Activity:</strong> {status.activity}
      </div>
      <div>
        <strong>Mood:</strong>
        <Badge
          variant={status.mood === "Happy" ? "success" : status.mood === "Neutral" ? "secondary" : "destructive"}
          className="ml-2"
        >
          {status.mood}
        </Badge>
      </div>
      <div>
        <strong>Last Updated:</strong> {status.lastUpdate}
      </div>
    </div>
  )
}

