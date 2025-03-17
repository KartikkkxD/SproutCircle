import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Book, Palette, Globe, Calculator, Microscope } from "lucide-react"

export default function OurCurriculum() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        Our Curriculum
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Book className="mr-2 h-6 w-6 text-blue-500" />
              Holistic Learning Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              SproutCircle's curriculum is designed to nurture the whole child. We focus on developing cognitive,
              social, emotional, and physical skills through a blend of structured activities and play-based learning.
              Our approach is grounded in the latest early childhood education research and best practices.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Palette className="mr-2 h-6 w-6 text-purple-500" />
              Arts and Creativity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We believe in the power of creativity to enhance learning. Our curriculum incorporates various forms of
              art, music, and dramatic play. These activities not only foster creativity but also help develop fine
              motor skills, self-expression, and cognitive flexibility.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Globe className="mr-2 h-6 w-6 text-green-500" />
              Language and Cultural Awareness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              In our increasingly connected world, we prioritize language skills and cultural awareness. Our curriculum
              includes age-appropriate language learning activities and cultural exploration, helping children develop a
              global perspective from an early age.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Calculator className="mr-2 h-6 w-6 text-red-500" />
              Early Mathematics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our curriculum introduces mathematical concepts through engaging, hands-on activities. Children learn
              about numbers, patterns, shapes, and basic problem-solving in a fun, interactive way that builds a strong
              foundation for future mathematical learning.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Microscope className="mr-2 h-6 w-6 text-yellow-500" />
              Science and Nature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We encourage curiosity and exploration through our science curriculum. Children engage in simple
              experiments, nature observations, and discussions about the world around them. These activities foster
              critical thinking skills and a love for scientific inquiry.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

