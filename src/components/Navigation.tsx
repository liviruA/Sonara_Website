import { Button } from "@/components/ui/button";
import Logo from "@/assets/Logo.png";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-16 w-auto" src={Logo} alt="Sonara Services logo" />
          </div>
          
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <a href="#" className="text-white hover:text-[#C19A6B] px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-[#C19A6B] px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-white hover:text-[#C19A6B] px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-[#C19A6B] px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <Button variant="outline" size="sm" className="ml-4">
                Admin
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-white hover:text-[#C19A6B] block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-white hover:text-[#C19A6B] block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#services" className="text-white hover:text-[#C19A6B] block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-[#C19A6B] block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;