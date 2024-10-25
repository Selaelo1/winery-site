import { useState } from "react";
import { Wine, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/95 text-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Wine className="h-8 w-8 text-[#B8860B]" />
            <span className="text-xl font-serif">Lefokeni</span>
          </div>
          <div
            className={`md:flex items-center space-x-8 lg:block ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul
              className={`md:flex md:flex-row md:space-x-8 flex flex-col p-4 pt-0 mt-4 border-t border-gray-500 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <a
                  href="#home"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  {" "}
                  Experiences{" "}
                </a>
              </li>
              <li>
                <a
                  href="#wines"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  {" "}
                  Our Wines{" "}
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  {" "}
                  Visit Us{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6" onClick={handleToggle} />
          </div>
        </div>
      </div>
    </nav>
  );
}
