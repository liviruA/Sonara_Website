import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Professional Excellence",
      description: "Years of experience in retail and industrial cleaning"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      ),
      title: "Reliable Service",
      description: "Consistent, dependable cleaning schedules"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </div>
      ),
      title: "Custom Solutions",
      description: "Tailored cleaning plans for your specific needs"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Sonara
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by Managing Director Bandula Abey, Sonara Services & Maintenance provides 
            top-quality cleaning solutions for retail and industrial clients across the Greater Toronto Area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 pt-6">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h3>
            <div className="max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold text-primary mb-2">
                Bandula Abey
              </h4>
              <p className="text-gray-600 font-medium mb-4">
                Managing Director
              </p>
              <p className="text-gray-700 leading-relaxed">
                Leading Sonara with years of experience in the cleaning industry, committed to 
                delivering exceptional service and building lasting client relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;