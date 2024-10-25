import React from "react";

export default function Wines() {
  const wines = [
    {
      name: "Reserve Cabernet Sauvignon",
      year: "2018",
      description: "Bold and complex with notes of blackberry and cedar",
      price: "R450",
    },
    {
      name: "Estate Chardonnay",
      year: "2020",
      description: "Elegant with hints of vanilla and tropical fruits",
      price: "R380",
    },
    {
      name: "Signature Blend",
      year: "2019",
      description: "A harmonious blend of Cabernet and Merlot",
      price: "R520",
    },
  ];

  return (
    <section id="wines" className="py-20 bg-[#1A1A1A] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">
          Our Collection
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {wines.map((wine, index) => (
            <div
              key={index}
              className="border border-[#B8860B] p-6 rounded-lg hover:bg-black/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-1">{wine.name}</h3>
              <p className="text-[#B8860B] mb-3">{wine.year}</p>
              <p className="text-gray-400 mb-4">{wine.description}</p>
              <p className="text-xl font-serif">{wine.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
