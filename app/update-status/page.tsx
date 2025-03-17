"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { UserCheck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UpdateStatus() {
  const [status, setStatus] = useState("")
  const [notes, setNotes] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the status update to your backend
    console.log("Updating status:", { status, notes })
    setStatus("")
    setNotes("")
    alert("Status updated successfully!")
  }

  return (
    <div className="container mx-auto p-4 pt-20">
      <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700 flex items-center">
            <UserCheck className="mr-2 h-6 w-6" />
            Update Child Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="happy">Happy</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="upset">Upset</SelectItem>
                <SelectItem value="sick">Sick</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Additional notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[100px]"
            />
            <Button type="submit" className="w-full">
              Update Status
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

