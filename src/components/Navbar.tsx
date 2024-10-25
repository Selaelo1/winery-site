import { useState, useEffect } from "react";
import { Wine, Menu, X } from "lucide-react"; // Import X icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // Scrolling down
    } else {
      setShowNavbar(true); // Scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black/95 text-gray-200 fixed w-full z-50 shadow-lg transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Wine className="h-8 w-8 text-[#B8860B]" aria-hidden="true" />
            <span className="text-xl font-serif">Lefokeni</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#wines"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  Our Wines
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={handleToggle} aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 transition-opacity duration-300">
          <ul className="flex flex-col p-4 border-t border-gray-500">
            <li>
              <a
                href="#home"
                className="hover:text-[#B8860B] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="hover:text-[#B8860B] transition-colors"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                href="#wines"
                className="hover:text-[#B8860B] transition-colors"
              >
                Our Wines
              </a>
            </li>
            <li>
              <a
                href="#visit"
                className="hover:text-[#B8860B] transition-colors"
              >
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
