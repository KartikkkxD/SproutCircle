import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Baby, BabyIcon as Child, School, Sun, Moon } from "lucide-react"

export default function OurPrograms() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        Our Programs
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Baby className="mr-2 h-6 w-6 text-pink-500" />
              Infant Care (0-18 months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our infant program provides a nurturing, safe environment for your baby to grow and explore. We focus on
              sensory experiences, motor skill development, and lots of one-on-one attention. Our caregivers are trained
              in infant development and provide daily updates on your baby's progress.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Child className="mr-2 h-6 w-6 text-blue-500" />
              Toddler Program (18 months - 3 years)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our toddler program is designed to support your child's growing independence and curiosity. We offer a
              balance of structured activities and free play, focusing on language development, social skills, and early
              learning concepts. Potty training support is also provided at this stage.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <School className="mr-2 h-6 w-6 text-yellow-500" />
              Preschool (3-5 years)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our preschool program prepares children for success in kindergarten and beyond. We offer a comprehensive
              curriculum that includes early literacy, math, science, art, and social studies. We also focus on
              developing social-emotional skills and fostering a love for learning.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Sun className="mr-2 h-6 w-6 text-orange-500" />
              Summer Camp (5-12 years)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our summer camp program offers exciting themes each week, combining fun activities with educational
              experiences. From science experiments to art projects, outdoor adventures to team-building exercises, we
              keep children engaged and learning throughout the summer months.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Moon className="mr-2 h-6 w-6 text-purple-500" />
              After-School Program (5-12 years)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our after-school program provides a safe and enriching environment for school-age children. We offer
              homework support, engaging activities, and opportunities for socialization. Our program is designed to
              complement your child's school day and support their overall development.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

