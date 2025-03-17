"use client"

import { useAuth } from "./context/auth-context"
import ParentDashboard from "./components/parent-dashboard"
import InstructorDashboard from "./components/instructor-dashboard"
import { Sprout } from "lucide-react"

export default function Home() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="container mx-auto p-4 text-center">
        <Sprout className="mx-auto h-24 w-24 text-green-500 mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-green-800">Welcome to SproutCircle</h1>
        <p className="text-lg text-green-700">Nurturing growth and learning in a circle of care</p>
      </div>
    )
  }

  return user.role === "parent" ? <ParentDashboard /> : <InstructorDashboard />
}

