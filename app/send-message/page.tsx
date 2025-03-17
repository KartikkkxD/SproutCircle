"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SendMessage() {
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log("Sending message:", message)
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
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[200px]"
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

