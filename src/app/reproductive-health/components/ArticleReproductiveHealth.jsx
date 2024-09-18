import Image from "next/image";
import { Heart, Users, Baby, Activity, Zap, Shield } from "lucide-react";

export default function ArticleReproductiveHealth() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Image
        src="/Reproductive-Health.jpeg"
        alt="Reproductive Health Illustration"
        width={1920}
        height={1080}
        className="w-full max-w-screen object-cover h-[45vh]"
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
          Reproductive Health Matters
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Family Planning",
              icon: Users,
              description:
                "Access to information and services for planning when to have children.",
            },
            {
              title: "Maternal Health",
              icon: Baby,
              description:
                "Care and support for women during pregnancy, childbirth, and postpartum period.",
            },
            {
              title: "Sexual Health",
              icon: Heart,
              description:
                "Education and services for safe and satisfying sexual experiences.",
            },
            {
              title: "Reproductive Rights",
              icon: Shield,
              description:
                "Protecting individuals' rights to make decisions about their reproductive lives.",
            },
            {
              title: "Fertility Support",
              icon: Zap,
              description:
                "Assistance for individuals and couples facing fertility challenges.",
            },
            {
              title: "Reproductive Health Screenings",
              icon: Activity,
              description:
                "Regular check-ups and tests to maintain reproductive system health.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <item.icon
                  className="text-purple-600 mr-3 text-crimson-500"
                  size={24}
                />
                <h2 className="text-xl font-semibold text-purple-800">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <section className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-purple-800">
            Why Reproductive Health Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-purple-700">
                For Individuals
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Empowers informed decision-making</li>
                <li>Promotes overall health and well-being</li>
                <li>Supports personal autonomy</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-purple-700">
                For Communities
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Contributes to gender equality</li>
                <li>Improves public health outcomes</li>
                <li>Supports sustainable development</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
