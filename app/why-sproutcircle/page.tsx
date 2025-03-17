import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Star, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function WhySproutCircle() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        Why Choose SproutCircle?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Star className="mr-2 h-6 w-6 text-yellow-500" />
              Excellence in Early Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              At SproutCircle, we combine cutting-edge educational practices with a nurturing environment to ensure your
              child's optimal growth and development.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-red-500" />
              Personalized Care
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We understand that each child is unique. Our approach is tailored to meet individual needs, ensuring every
              child feels valued and supported.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Users className="mr-2 h-6 w-6 text-blue-500" />
              Community-Centered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              SproutCircle is more than a daycare; it's a community. We foster strong relationships between children,
              parents, and educators to create a supportive learning ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Sprout className="mr-2 h-6 w-6 text-green-500" />
              Holistic Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our programs are designed to nurture not just academic skills, but also social, emotional, and physical
              development, preparing children for lifelong success.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-xl text-green-800 mb-4">Discover more about what makes SproutCircle special:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/how-we-differ" className="text-green-600 hover:text-green-800 underline">
            How We Differ
          </Link>
          <Link href="/our-curriculum" className="text-green-600 hover:text-green-800 underline">
            Our Curriculum
          </Link>
          <Link href="/our-programs" className="text-green-600 hover:text-green-800 underline">
            Our Programs
          </Link>
          <Link href="/diversity-inclusion" className="text-green-600 hover:text-green-800 underline">
            Diversity & Inclusion
          </Link>
        </div>
      </div>
    </div>
  )
}

