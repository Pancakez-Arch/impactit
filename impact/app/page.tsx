import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ui/service-card";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Best Experience Management Automation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional IT equipment rental services for your business needs
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/products"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/about"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/hero-image.jpg"
                alt="IT Equipment"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Exclusive Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard
              title="UI/UX Design"
              description="Designing user interfaces & experiences"
            />
            <ServiceCard
              title="Web Development"
              description="Full-stack web development services"
            />
            <ServiceCard
              title="App Development"
              description="Mobile and desktop applications"
            />
            <ServiceCard
              title="24/7 Support"
              description="Round-the-clock technical support"
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/approach-image.jpg"
                alt="Our Approach"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Our unique Approach</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Global standard service</h3>
                    <p className="text-gray-600">Maintaining the highest quality standards in equipment rental</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Nationwide service</h3>
                    <p className="text-gray-600">Available across the country with quick delivery</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Customer-focused solutions</h3>
                    <p className="text-gray-600">Tailored equipment rental solutions for your needs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
