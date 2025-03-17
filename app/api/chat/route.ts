import { type NextRequest, NextResponse } from "next/server"
import { spawn } from "child_process"

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json()
    if (!input) {
      return NextResponse.json({ error: "Input is required" }, { status: 400 })
    }

    // Start the Python FastAPI server if not already running
    const pythonProcess = spawn("python", ["-m", "uvicorn", "lib.bard.main:app", "--host", "0.0.0.0", "--port", "8000"])

    // Send request to the Python FastAPI server
    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    })

    if (!response.ok) {
      throw new Error("Failed to get response from Bard API")
    }

    const data = await response.json()
    return NextResponse.json({ output: data.output })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 },
    )
  }
}

