import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Cafora Hits
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            {" "}
            Different
          </span>
        </h2>
        <p className="text-center text-l text-gray-600 mb-8 max-w-2xl mx-auto ">
          Cafora blends rich flavor with quiet luxury. Inspired by aroma and
          elegance, each cup is crafted from premium beans for a smooth, refined
          coffee experience. It's not just coffee it's a moment of calm, warmth,
          and taste.
        </p>
      </div>
    </section>
  );
};

export default Hero;
