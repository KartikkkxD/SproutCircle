"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"

export default function LogActivity() {
  const [activity, setActivity] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the activity log to your backend
    console.log("Logging activity:", { activity, description })
    setActivity("")
    setDescription("")
    alert("Activity logged successfully!")
  }

  return (
    <div className="container mx-auto p-4 pt-20">
      <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700 flex items-center">
            <ClipboardList className="mr-2 h-6 w-6" />
            Log Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Activity Name"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              required
            />
            <Textarea
              placeholder="Activity Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
              required
            />
            <Button type="submit" className="w-full">
              Log Activity
            </Button>
          </form>
        </CardContent>
        <Button variant="outline" onClick={() => router.back()} className="mt-4">
          Back
        </Button>
      </Card>
    </div>
  )
}

