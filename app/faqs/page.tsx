import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sprout } from "lucide-react"

const faqs = [
  {
    question: "What age groups does SproutCircle cater to?",
    answer:
      "SproutCircle offers programs for children from infancy (0-18 months) through school age (up to 12 years). We have dedicated programs for infants, toddlers, preschoolers, and school-age children for after-school and summer camp activities.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our standard operating hours are Monday to Friday, from 7:00 AM to 6:00 PM. However, we understand that families may have different needs, so please contact us to discuss any specific requirements you may have.",
  },
  {
    question: "How do you ensure the safety of children in your care?",
    answer:
      "Safety is our top priority. We maintain strict security protocols, including secure entry systems, regular safety drills, and comprehensive background checks for all staff members. Our facilities are designed with child safety in mind, and we maintain low child-to-teacher ratios to ensure proper supervision at all times.",
  },
  {
    question: "What is your approach to discipline?",
    answer:
      "We believe in positive reinforcement and redirection. Our approach focuses on teaching children about their emotions, promoting problem-solving skills, and encouraging good behavior. We never use physical punishment or harsh words.",
  },
  {
    question: "How do you communicate with parents about their child's progress?",
    answer:
      "We use a combination of daily reports, regular parent-teacher conferences, and a secure online portal where parents can access updates, photos, and important information about their child's day and overall progress.",
  },
  {
    question: "What is your policy on sick children?",
    answer:
      "To maintain a healthy environment for all children and staff, we ask that sick children be kept at home. This includes children with fever, vomiting, diarrhea, or any contagious illnesses. We have specific guidelines on when a child can return after an illness, which we're happy to discuss in detail.",
  },
  {
    question: "Do you provide meals and snacks?",
    answer:
      "Yes, we provide nutritious meals and snacks that meet or exceed USDA guidelines. We can accommodate various dietary restrictions and allergies. Our menu is available for parents to review, and we welcome feedback and suggestions.",
  },
  {
    question: "How do you handle nap times?",
    answer:
      "We have designated quiet times for rest, typically after lunch. For younger children, we provide individual cribs or cots. Older children who don't nap are offered quiet activities during this time. We work with parents to maintain consistency with home routines as much as possible.",
  },
  {
    question: "What is your policy on technology use?",
    answer:
      "We believe in balanced technology use. For younger children, we limit screen time and focus on interactive, educational content when technology is used. For school-age children in our after-school program, we provide supervised access to computers for homework and educational games.",
  },
  {
    question: "How can I enroll my child at SproutCircle?",
    answer:
      "To enroll, you can start by scheduling a tour of our facility. After the tour, you can fill out an application form. Once your application is reviewed, we'll discuss availability and the enrollment process. We recommend enrolling as early as possible as spaces can fill up quickly.",
  },
]

export default function FAQs() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-6 text-green-800 flex items-center justify-center">
        <Sprout className="mr-2 h-10 w-10 text-green-600" />
        Frequently Asked Questions
      </h1>

      <Card className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">Common Questions About SproutCircle</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

