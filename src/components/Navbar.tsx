// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Wine, Calendar, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black/95 text-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Wine className="h-8 w-8 text-[#B8860B]" />
            <span className="text-xl font-serif">Lefokeni</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#B8860B] transition-colors">
              Home
            </a>
            <a
              href="#experiences"
              className="hover:text-[#B8860B] transition-colors"
            >
              Experiences
            </a>
            <a href="#wines" className="hover:text-[#B8860B] transition-colors">
              Our Wines
            </a>
            <a href="#visit" className="hover:text-[#B8860B] transition-colors">
              Visit Us
            </a>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}