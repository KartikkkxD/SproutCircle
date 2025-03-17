"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare } from "lucide-react"

const mockParents = [
  { id: "1", name: "Mr. & Mrs. Johnson (Alice's parents)" },
  { id: "2", name: "Mr. & Mrs. Smith (Bob's parents)" },
  { id: "3", name: "Mr. & Mrs. Williams (Charlie's parents)" },
]

export default function SendMessage() {
  const [selectedParent, setSelectedParent] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log("Sending message:", { parentId: selectedParent, message })
    setSelectedParent("")
    setMessage("")
    alert("Message sent successfully!")
  }

  return (
    <div className="container mx-auto p-4 pt-20">
      <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700 flex items-center">
            <MessageSquare className="mr-2 h-6 w-6" />
            Send Message to Parents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select onValueChange={setSelectedParent} required>
              <SelectTrigger>
                <SelectValue placeholder="Select parent" />
              </SelectTrigger>
              <SelectContent>
                {mockParents.map((parent) => (
                  <SelectItem key={parent.id} value={parent.id}>
                    {parent.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[200px]"
              required
            />
            <Button type="submit" className="w-full">
              Send Message
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

