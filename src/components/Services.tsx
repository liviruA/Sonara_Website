import commercialImage from "@/assets/commercial-cleaning.jpg";
import industrialImage from "@/assets/industrial-cleaning.jpg";

const Services = () => {
  const retailServices = [
    "Daily/Weekly/Monthly cleaning schedules",
    "Floor care and maintenance", 
    "Window cleaning",
    "Restroom sanitization",
    "Trash removal and recycling",
    "COVID-19 sanitization protocols"
  ];

  const industrialServices = [
    "Heavy-duty equipment cleaning",
    "Warehouse floor maintenance",
    "Pressure washing services", 
    "Hazardous material cleanup",
    "Equipment sanitization",
    "Safety compliance cleaning"
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive cleaning solutions for your business
          </p>
        </div>

        <div className="space-y-16">
          {/* Retail Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Retail Cleaning
              </h3>
              <p className="text-gray-700 text-lg">
                Professional cleaning services for retail spaces, ensuring a clean and 
                welcoming environment for your customers.
              </p>
              <ul className="space-y-3">
                {retailServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src={commercialImage} 
                alt="Commercial cleaning services"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Industrial Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <img 
                src={industrialImage} 
                alt="Industrial cleaning services"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Industrial Cleaning
              </h3>
              <p className="text-gray-700 text-lg">
                Specialized cleaning solutions for industrial facilities, warehouses, 
                and manufacturing plants.
              </p>
              <ul className="space-y-3">
                {industrialServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;