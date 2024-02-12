import React from "react";

const CTA = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join Darsheel Savla's Journey
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Become part of the culinary exploration and innovation with
            PatilKaki's co-founder.
          </p>
          <div className="flex justify-center">
            <a
              href="#consultancy-program"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
