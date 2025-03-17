import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ChildStatus from "./child-status"
import GPSTracker from "./gps-tracker"
import LearningGames from "./learning-games"
import { Sprout, MapPin, Gamepad2, Bell, MessageSquare, UserCheck, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ParentDashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-green-800 flex items-center">
          <Sprout className="mr-2 h-8 w-8 text-green-600" />
          Parent Dashboard
        </h1>
        <Card className="bg-white/90 backdrop-blur-sm w-64">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-green-700 flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              My Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-800">
              <li className="flex justify-between items-center mb-1">
                <span>Child Status:</span>
                <span className="font-semibold">Happy</span>
              </li>
              <li className="flex justify-between items-center mb-1">
                <span>Last Activity:</span>
                <span className="font-semibold">Storytime</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Upcoming:</span>
                <span className="font-semibold">Lunch</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <Sprout className="mr-2 h-5 w-5" />
              Child Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChildStatus />
          </CardContent>
        </Card>
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              GPS Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GPSTracker />
          </CardContent>
        </Card>
        <Card className="md:col-span-2 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Learning Games
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LearningGames />
          </CardContent>
        </Card>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Link href="/send-message" passHref>
            <Button className="w-full flex items-center justify-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </Link>
          <Link href="/update-status" passHref>
            <Button className="w-full flex items-center justify-center">
              <UserCheck className="mr-2 h-5 w-5" />
              Update Status
            </Button>
          </Link>
          <Link href="/growth-report" passHref>
            <Button className="w-full flex items-center justify-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Growth Report
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

