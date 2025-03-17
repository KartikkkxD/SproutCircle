import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this would fetch data from a database or external API
  const status = {
    activity: "Nap time",
    mood: "Happy",
    lastUpdate: new Date().toLocaleTimeString(),
  }

  return NextResponse.json(status)
}

