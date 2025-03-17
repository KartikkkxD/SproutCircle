"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"

export default function GPSTracker() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    // In a real app, this would be replaced with actual GPS tracking logic
    setLocation({ lat: 40.7128, lng: -74.006 }) // Example: New York City coordinates
  }, [])

  return (
    <div className="relative h-64 bg-gray-200 rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <MapPin className="text-red-500 h-8 w-8" />
      </div>
      <div className="absolute bottom-2 left-2 bg-white p-2 rounded shadow">
        <p className="text-sm">Lat: {location.lat.toFixed(4)}</p>
        <p className="text-sm">Lng: {location.lng.toFixed(4)}</p>
      </div>
    </div>
  )
}

