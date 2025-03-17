"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"

const mockData = {
  Alice: [
    { month: "Jan", cognitive: 65, social: 70, language: 60, physical: 75 },
    { month: "Feb", cognitive: 68, social: 72, language: 63, physical: 77 },
    { month: "Mar", cognitive: 70, social: 75, language: 65, physical: 80 },
    // ... (more months)
  ],
  Bob: [
    { month: "Jan", cognitive: 62, social: 68, language: 58, physical: 72 },
    { month: "Feb", cognitive: 65, social: 70, language: 60, physical: 75 },
    { month: "Mar", cognitive: 68, social: 73, language: 63, physical: 78 },
    // ... (more months)
  ],
  // ... (more children)
}

export default function GrowthReports() {
  const [selectedChild, setSelectedChild] = useState("Alice")
  const router = useRouter()

  return (
    <div className="container mx-auto p-4 pt-20">
      <Card className="bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6" />
            Children Growth Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={setSelectedChild} defaultValue={selectedChild}>
            <SelectTrigger className="w-[180px] mb-4">
              <SelectValue placeholder="Select child" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(mockData).map((child) => (
                <SelectItem key={child} value={child}>
                  {child}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <ChartContainer
            config={{
              cognitive: {
                label: "Cognitive Skills",
                color: "hsl(var(--chart-1))",
              },
              social: {
                label: "Social Skills",
                color: "hsl(var(--chart-2))",
              },
              language: {
                label: "Language Skills",
                color: "hsl(var(--chart-3))",
              },
              physical: {
                label: "Physical Development",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData[selectedChild]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="cognitive" stroke="var(--color-cognitive)" name="Cognitive Skills" />
                <Line type="monotone" dataKey="social" stroke="var(--color-social)" name="Social Skills" />
                <Line type="monotone" dataKey="language" stroke="var(--color-language)" name="Language Skills" />
                <Line type="monotone" dataKey="physical" stroke="var(--color-physical)" name="Physical Development" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <Button variant="outline" onClick={() => router.back()} className="mt-4">
          Back
        </Button>
      </Card>
    </div>
  )
}

