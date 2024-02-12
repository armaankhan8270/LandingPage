import React, { useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Why from "./Why";
import CountDown from "./CountDown";
import Call from "./FORM";
import CTA from "./CTA";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollTo1000px = (pixes) => {
    window.scrollTo({
      top: window.pageYOffset + pixes,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">
                PatilKaki
              </a>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <button
                    onClick={scrollTo1000px(0)}
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
                  >
                    Hero
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo1000px(600)}
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo1000px(1400)}
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
                  >
                    Why
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo1000px(2000)}
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
                  >
                    CountDown
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => scrollTo1000px(2700)}
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
                  >
                    CTA
                  </button>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  className="h-6 w-6 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0-5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0-6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "" : "hidden"
          } md:hidden`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <button
                onClick={() => scrollTo1000px("hero")}
                className="block text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
              >
                Hero
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo1000px("about")}
                className="block text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo1000px("why")}
                className="block text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
              >
                Why
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo1000px("countdown")}
                className="block text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
              >
                CountDown
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo1000px("call")}
                className="block text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
              >
                Call
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo1000px("cta")}
                className="block text-gray-300 hover:text-white transition duration-300 ease-in-out focus:outline-none"
              >
                CTA
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Hero id="hero" />
      <About id="about" />
      <Why id="why" />
      <CountDown id="countdown" />
      <Call id="call" />
      <CTA id="cta" /> */}
    </div>
  );
};

export default App;
