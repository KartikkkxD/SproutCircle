import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Early Childhood Education",
    excerpt:
      "Discover why the first five years of a child's life are crucial for their development and future success.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Nurturing Emotional Intelligence in Children",
    excerpt: "Learn about strategies to help your child develop strong emotional intelligence from an early age.",
    date: "2023-05-22",
  },
  {
    id: 3,
    title: "The Power of Play-Based Learning",
    excerpt: "Explore how play-based learning can enhance cognitive development and creativity in young children.",
    date: "2023-05-29",
  },
  {
    id: 4,
    title: "Creating a Positive Learning Environment at Home",
    excerpt: "Tips and ideas for parents to create a stimulating and supportive learning environment at home.",
    date: "2023-06-05",
  },
  {
    id: 5,
    title: "The Benefits of Multilingual Education for Young Children",
    excerpt:
      "Discover the cognitive and cultural benefits of exposing children to multiple languages from an early age.",
    date: "2023-06-12",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        SproutCircle Blog
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500">Published on {post.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

