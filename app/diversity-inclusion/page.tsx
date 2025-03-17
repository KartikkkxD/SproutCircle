import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Users, Heart, Globe, Book, Puzzle } from "lucide-react"

export default function DiversityInclusion() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        Diversity and Inclusion at SproutCircle
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Users className="mr-2 h-6 w-6 text-blue-500" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              At SproutCircle, we are committed to creating an inclusive environment that celebrates diversity in all
              its forms. We believe that every child, family, and staff member brings unique perspectives and
              experiences that enrich our community.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-red-500" />
              Inclusive Curriculum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              Our curriculum is designed to reflect and respect diverse cultures, abilities, and family structures. We
              incorporate books, activities, and materials that represent various backgrounds and experiences, helping
              children develop a positive self-image and respect for others.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Globe className="mr-2 h-6 w-6 text-green-500" />
              Cultural Celebrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We celebrate cultural diversity through various events and activities throughout the year. These
              celebrations provide opportunities for children and families to share their traditions and learn about
              others, fostering a sense of global citizenship.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Book className="mr-2 h-6 w-6 text-yellow-500" />
              Multilingual Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We recognize the value of multilingualism and support children in maintaining their home languages while
              learning English. Our staff includes bilingual educators, and we provide resources in multiple languages
              to ensure effective communication with all families.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 flex items-center">
              <Puzzle className="mr-2 h-6 w-6 text-purple-500" />
              Inclusive Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800">
              We are committed to creating an environment that is accessible and welcoming to children of all abilities.
              Our staff receives ongoing training in inclusive practices, and we work closely with families and
              specialists to provide appropriate accommodations and support for children with diverse needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

