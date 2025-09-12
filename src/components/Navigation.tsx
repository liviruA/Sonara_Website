import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="w-full h-20 bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="flex justify-between items-center h-20" src="/src/assets/logo.png" alt="alternatetext"></img>
          </div>
          
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <Button variant="outline" size="sm" className="ml-4">
                Admin
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;