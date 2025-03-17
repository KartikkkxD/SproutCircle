import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Zap, Heart, Brain, Users } from "lucide-react"

export default function HowWeDiffer() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        How We Differ
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Zap className="mr-2 h-6 w-6 text-yellow-500" />
              Innovative Curriculum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Unlike traditional daycares, SproutCircle employs a cutting-edge, research-based curriculum that adapts to
              each child's unique learning style and pace. We integrate STEAM (Science, Technology, Engineering, Arts,
              and Mathematics) concepts into daily activities, fostering critical thinking and creativity from an early
              age.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-red-500" />
              Emotional Intelligence Focus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We place a strong emphasis on developing emotional intelligence. Our program includes daily activities
              designed to help children understand and manage their emotions, develop empathy, and build strong
              interpersonal skills. This focus sets us apart and prepares children for success in all areas of life.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Brain className="mr-2 h-6 w-6 text-purple-500" />
              Personalized Learning Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              At SproutCircle, we recognize that every child is unique. Our educators create individualized learning
              plans for each child, regularly adjusted based on their progress and interests. This personalized approach
              ensures that every child is appropriately challenged and supported in their learning journey.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Users className="mr-2 h-6 w-6 text-blue-500" />
              Community Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We believe in the power of community. SproutCircle regularly organizes family events, workshops, and
              volunteer opportunities, fostering a strong sense of belonging and shared purpose among our families. This
              community-centric approach creates a supportive network that extends beyond our walls.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Sprout className="mr-2 h-6 w-6 text-green-500" />
              Eco-Friendly Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              SproutCircle is committed to environmental sustainability. We incorporate eco-friendly practices into our
              daily operations and curriculum, teaching children about environmental responsibility from an early age.
              Our facilities use renewable energy, and we prioritize sustainable materials in our learning environments.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

