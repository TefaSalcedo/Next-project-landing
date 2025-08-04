"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all-smooth ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-custom-md"
          : "bg-white/90 backdrop-blur-sm shadow-custom-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <h2 className="text-2xl font-bold text-gradient bg-gradient-primary cursor-pointer transition-all-smooth hover:scale-105">
                TuMarca
              </h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="relative text-gray-700 hover:text-blue-600 transition-all-smooth font-medium group py-2"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#servicios"
              className="relative text-gray-700 hover:text-blue-600 transition-all-smooth font-medium group py-2"
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#nosotros"
              className="relative text-gray-700 hover:text-blue-600 transition-all-smooth font-medium group py-2"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contacto"
              className="relative text-gray-700 hover:text-blue-600 transition-all-smooth font-medium group py-2"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="bg-gradient-primary text-white px-6 py-2.5 rounded-full hover:shadow-custom-md transition-all-smooth btn-hover-lift font-medium">
              Comenzar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg transition-all-smooth ${
                isOpen ? "bg-blue-50" : ""
              }`}
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md shadow-custom-lg border-t border-gray-100">
          <a
            href="#inicio"
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all-smooth font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all-smooth font-medium"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#nosotros"
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all-smooth font-medium"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all-smooth font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
          <button
            className="block w-full text-left px-4 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-custom-md transition-all-smooth font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Comenzar
          </button>
        </div>
      </div>
    </nav>
  );
}
