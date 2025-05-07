export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Impact IT</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Impact IT has been at the forefront of IT equipment rental services, providing businesses with high-quality technology solutions when they need them most.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses across the country.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="/images/about-hero.jpg"
              alt="About Impact IT"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">12+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-600">Equipment Units</p>
          </div>
        </div>
      </div>
    </main>
  );
}