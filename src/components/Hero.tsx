import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="bg-hero-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-black-100">
                Professional{" "}
                <span className="text-[#C19A6B]">Cleaning</span>{" "}
                Services
              </h1>
              <p className="text-xl text-gray-600">
                Retail and Industrial Cleaning Excellence
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Trust Sonara Maintenance & Services for comprehensive cleaning solutions tailored to your business needs. We deliver exceptional results with attention to detail and professional service.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="hover:bg-[#C19A6B] px-8">
                  Get Free Quote
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="px-8">
                  Our Services
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional cleaning services" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Excellence</p>
                    <p className="text-sm text-gray-600">Years of trusted service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;