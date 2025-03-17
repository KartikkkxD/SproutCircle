import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Heart, Users, Book, PhoneCall } from "lucide-react"
import Link from "next/link"
import CustomerCareChatbot from "../components/customer-care-chatbot"

export default function About() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        About SproutCircle
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              SproutCircle was founded in 2010 with a vision to revolutionize early childhood education. Our journey
              began with a small group of passionate educators who believed in the power of nurturing young minds in a
              holistic, supportive environment.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              At SproutCircle, we believe in nurturing young minds in a safe, loving, and stimulating environment. Our
              mission is to provide high-quality child care that fosters growth, creativity, and a lifelong love for
              learning.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 flex items-center">
                <Heart className="mr-2 h-5 w-5 text-red-500" />
                Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800">
                We provide a nurturing environment where every child feels safe, loved, and valued.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-500" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800">
                We foster a sense of belonging and encourage positive relationships among children, families, and staff.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 flex items-center">
                <Book className="mr-2 h-5 w-5 text-yellow-500" />
                Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800">
                We offer age-appropriate activities that stimulate curiosity, creativity, and cognitive development.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Learn More About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-4">
              Discover what makes SproutCircle unique and how we're shaping the future of early childhood education:
            </p>
            <div className="flex flex-wrap gap-4">
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
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm" id="customer-care">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <PhoneCall className="mr-2 h-6 w-6 text-green-600" />
              Customer Care
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-4">
              Our dedicated customer care team is here to assist you with any questions or concerns you may have. Feel
              free to reach out to us at:
            </p>
            <ul className="list-disc list-inside space-y-2 text-green-800 mb-4">
              <li>
                <a href="tel:+919318475247" className="hover:underline">
                  +91 9318475247
                </a>
              </li>
              <li>
                <a href="tel:+919877828117" className="hover:underline">
                  +91 9877828117
                </a>
              </li>
            </ul>
            <p className="text-green-800 mb-4">
              Our team is available Monday through Friday, from 8:00 AM to 6:00 PM. We strive to respond to all
              inquiries within 24 hours.
            </p>
            <CustomerCareChatbot />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

