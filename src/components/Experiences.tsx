import React from "react";
import { GlassWater, GamepadIcon, Users } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      icon: <GlassWater className="h-8 w-8 text-[#B8860B]" />,
      title: "Wine Tasting",
      description:
        "Indulge in our curated selection of premium wines while our sommeliers guide you through each unique flavor profile.",
    },
    {
      icon: <GamepadIcon className="h-8 w-8 text-[#B8860B]" />,
      title: "Game Night",
      description:
        "Join us for an evening of sophisticated entertainment, featuring classic board games and wine pairings.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#B8860B]" />,
      title: "Private Events",
      description:
        "Host your special occasions in our elegant venue with customized wine experiences and catering options.",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12">
          Curated Experiences
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
