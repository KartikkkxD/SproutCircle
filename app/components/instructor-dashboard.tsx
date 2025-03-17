import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sprout, Users, Calendar, Zap, ClipboardList, TrendingUp, MessageSquare, UserCheck } from "lucide-react"

const children = [
  { id: 1, name: "Alice Johnson", status: "Present" },
  { id: 2, name: "Bob Smith", status: "Absent" },
  { id: 3, name: "Charlie Brown", status: "Present" },
]

export default function InstructorDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-green-800 flex items-center">
        <Sprout className="mr-2 h-8 w-8 text-green-600" />
        Instructor Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Children Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {children.map((child) => (
                <li key={child.id} className="flex justify-between items-center">
                  <span>{child.name}</span>
                  <span
                    className={`px-2 py-1 rounded ${
                      child.status === "Present" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                    }`}
                  >
                    {child.status}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Daily Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>9:00 AM - Morning Circle</li>
              <li>10:00 AM - Nature Exploration</li>
              <li>11:00 AM - Outdoor Play</li>
              <li>12:00 PM - Lunch</li>
              <li>1:00 PM - Quiet Time</li>
              <li>3:00 PM - Creative Activities</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Link href="/instructor/log-activity" passHref>
              <Button className="flex items-center">
                <ClipboardList className="mr-2 h-5 w-5" />
                Log Activity
              </Button>
            </Link>
            <Link href="/instructor/growth-reports" passHref>
              <Button className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Growth Reports
              </Button>
            </Link>
            <Link href="/instructor/send-message" passHref>
              <Button className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message to Parents
              </Button>
            </Link>
            <Link href="/instructor/update-status" passHref>
              <Button className="flex items-center">
                <UserCheck className="mr-2 h-5 w-5" />
                Update Child Status
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

