"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const data = [
  { month: "Jan", cognitive: 65, social: 70, language: 60, physical: 75 },
  { month: "Feb", cognitive: 68, social: 72, language: 63, physical: 77 },
  { month: "Mar", cognitive: 70, social: 75, language: 65, physical: 80 },
  { month: "Apr", cognitive: 73, social: 78, language: 68, physical: 82 },
  { month: "May", cognitive: 75, social: 80, language: 70, physical: 85 },
  { month: "Jun", cognitive: 78, social: 82, language: 73, physical: 87 },
  { month: "Jul", cognitive: 80, social: 85, language: 75, physical: 90 },
  { month: "Aug", cognitive: 82, social: 87, language: 78, physical: 92 },
  { month: "Sep", cognitive: 85, social: 90, language: 80, physical: 95 },
  { month: "Oct", cognitive: 87, social: 92, language: 83, physical: 97 },
  { month: "Nov", cognitive: 90, social: 95, language: 85, physical: 100 },
  { month: "Dec", cognitive: 92, social: 97, language: 88, physical: 102 },
]

export default function GrowthReport() {
  const router = useRouter()
  return (
    <div className="container mx-auto p-4 pt-20">
      <Card className="bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6" />
            Child Growth Report
          </CardTitle>
        </CardHeader>
        <CardContent>
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
              <LineChart data={data}>
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
      </Card>
      <Button variant="outline" onClick={() => router.back()} className="mt-4">
        Back
      </Button>
    </div>
  )
}

