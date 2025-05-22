import { ArrowLeft, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavigationBar from "@/components/navigation-bar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Ultimate Guide to Weight Loss Programs at Siri Beauty & Wellness",
  description:
    "At Siri Beauty & Wellness in Jayanagar, we understand that weight loss is a journey. Whether you're looking for slimming treatments, inch loss, body contouring, or effective fat reduction, we offer a comprehensive weight loss program designed for sustainable results.",
  keywords:
    "Best weight loss center in Bangalore, slimming treatments in Jayanagar, body contouring, weight loss programs near me, inch loss, fat reduction treatments, weight loss Bangalore",
}

export default function WeightLossProgramsPage() {
  const post = {
    id: "weight-loss-programs",
    title: "The Ultimate Guide to Weight Loss Programs at Siri Beauty & Wellness",
    category: "Weight Loss",
    date: "May 5, 2025",
    excerpt:
      "At Siri Beauty & Wellness in Jayanagar, we understand that weight loss is a journey. Whether you're looking for slimming treatments, inch loss, body contouring, or effective fat reduction, we offer a comprehensive weight loss program designed for sustainable results.",
    image: "/ultrasonic-cavitation.png",
    color: "black",
    layout: "large",
    keywords:
      "Best weight loss center in Bangalore, slimming treatments in Jayanagar, body contouring, weight loss programs near me, inch loss, fat reduction treatments, weight loss Bangalore",
    introduction:
      "At Siri Beauty & Wellness in Jayanagar, we understand that weight loss is a journey. Whether you're looking for slimming treatments, inch loss, body contouring, or effective fat reduction, we offer a comprehensive weight loss program designed for sustainable results.",
    sections: [
      {
        title: "Why Weight Loss Matters",
        content:
          "Health benefits of weight loss, including improved confidence, reduced risk of diseases, and enhanced well-being.",
      },
      {
        title: "Our Weight Loss Services",
        content: "Tailored weight loss programs, slimming therapies, and fat reduction.",
      },
      {
        title: "Effective Inch Loss Solutions",
        content: "Treatments like body contouring and skin tightening.",
      },
      {
        title: "Diet and Lifestyle Counseling",
        content: "Personalized plans for maintaining healthy eating and exercise routines.",
      },
      {
        title: "Customer Success Stories",
        content: "Testimonials showcasing the transformation achieved at Siri Wellness.",
      },
    ],
    conclusion:
      "Join Siri Beauty & Wellness for a personalized weight loss journey that targets your specific needs. Book your consultation today!",
  }

  return (
    <>
      <NavigationBar />
      <main className="pt-16 pb-8 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <Link href="/blog" className="flex items-center gap-1 hover:underline text-sm">
              <ArrowLeft className="h-3 w-3" /> Back to Blog
            </Link>
            <Link href="/" className="flex items-center gap-1 hover:underline text-sm">
              <Home className="h-3 w-3" /> Back to Home
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-3">
              <span className="inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium mb-1">
                {post.category}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-1">{post.title}</h1>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden mb-4 group">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="prose prose-sm max-w-none">
              <div className="mb-3">
                <h2 className="text-lg font-bold mb-1">Introduction</h2>
                <p className="text-gray-700 text-sm leading-snug">{post.introduction}</p>
              </div>

              <div className="mb-3">
                <h2 className="text-lg font-bold mb-1">Key Sections</h2>
                {post.sections.map((section: any, index: number) => (
                  <div key={index} className="mb-2">
                    <h3 className="text-base font-semibold mb-0.5">{section.title}</h3>
                    <p className="text-gray-700 text-sm leading-snug">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <h2 className="text-lg font-bold mb-1">Conclusion</h2>
                <p className="text-gray-700 text-sm leading-snug">{post.conclusion}</p>
              </div>

              {/* FAQ Section - Made more prominent */}
              <div className="my-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold mb-3 text-center">
                  Frequently Asked Questions – Siri Beauty and Wellness Center
                </h2>
                <div className="space-y-3">
                  {/* FAQ 1 */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex justify-between items-center w-full px-4 py-3 text-left">
                      <span className="font-medium text-sm">
                        What is the best weight loss program available in Jayanagar?
                      </span>
                    </div>
                    <div className="px-4 py-3 text-sm text-gray-700 leading-snug border-t border-gray-100">
                      At Siri Beauty and Wellness, we offer the best weight loss programs in Jayanagar with customized
                      slimming plans, inch loss treatments, and body contouring tailored to your unique needs.
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex justify-between items-center w-full px-4 py-3 text-left">
                      <span className="font-medium text-sm">
                        Where can I get Hydrafacial treatment near me in Bangalore?
                      </span>
                    </div>
                    <div className="px-4 py-3 text-sm text-gray-700 leading-snug border-t border-gray-100">
                      Siri Beauty Center in Jayanagar offers the latest Hydrafacial treatments for deep cleansing, skin
                      rejuvenation, and glowing skin – perfect for anyone searching for "Hydrafacial near me."
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex justify-between items-center w-full px-4 py-3 text-left">
                      <span className="font-medium text-sm">
                        Which center in Bangalore provides advanced hair fall and PRP treatment?
                      </span>
                    </div>
                    <div className="px-4 py-3 text-sm text-gray-700 leading-snug border-t border-gray-100">
                      Siri Hair Clinic in Jayanagar specializes in hair fall control and PRP hair regrowth treatment
                      using proven technologies and expert consultation.
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex justify-between items-center w-full px-4 py-3 text-left">
                      <span className="font-medium text-sm">
                        Are there any affordable beauty packages in Jayanagar?
                      </span>
                    </div>
                    <div className="px-4 py-3 text-sm text-gray-700 leading-snug border-t border-gray-100">
                      Yes! We have a 5-in-1 beauty combo offer for just ₹999 including facial, waxing, threading,
                      massage, and hair trimming. It's one of the most budget-friendly beauty services in Jayanagar.
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                    <div className="flex justify-between items-center w-full px-4 py-3 text-left">
                      <span className="font-medium text-sm">
                        Do you offer permanent laser hair removal in Bangalore?
                      </span>
                    </div>
                    <div className="px-4 py-3 text-sm text-gray-700 leading-snug border-t border-gray-100">
                      Siri Beauty and Wellness provides safe and effective permanent laser hair reduction treatments in
                      Bangalore using advanced, skin-friendly technologies.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h3 className="text-base font-semibold mb-1">Keywords</h3>
                <p className="text-gray-600 text-xs italic leading-tight">{post.keywords}</p>
              </div>

              <div className="mt-4">
                <Link
                  href="/#contact"
                  className="inline-block bg-gradient-to-r from-[#FF007F] to-[#FF5A36] text-white px-4 py-2 text-sm rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
