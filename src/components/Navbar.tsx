import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-400 animate-float" />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              UpUp&Up Tech Inc
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              ホーム
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              サービス
            </a>
            <a
              href="#showcases"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              実績
            </a>
            <a
              href="#reviews"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              お客様の声
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              チーム
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              お問い合わせ
            </a>
            {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-all duration-300 hover:scale-105 transform">
              Get Started
            </button> */}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              サービス
            </a>
            <a
              href="#reviews"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              お客様の声
            </a>
            <a
              href="#team"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              チーム
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
