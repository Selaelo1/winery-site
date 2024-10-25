import { Wine, Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wine className="h-6 w-6 text-[#CFB53B]" />
              <span className="ml-2 text-xl font-serif">Lefokeni</span>
            </div>
            <p className="text-gray-400">
              Crafting exceptional wines and memorable experiences in the heart
              of South Africa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#CFB53B]">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="text-gray-400 hover:text-[#CFB53B]"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a href="#wines" className="text-gray-400 hover:text-[#CFB53B]">
                  Our Wines
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#CFB53B]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#CFB53B] mr-2" />
                <span className="text-gray-400">info@lefokeni.co.za</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#CFB53B] mr-2" />
                <span className="text-gray-400">+27 21 123 4567</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#CFB53B] hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lefokeni Winery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
