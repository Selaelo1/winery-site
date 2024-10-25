import { GlassWater, GamepadIcon, Users } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      icon: <GlassWater className="h-8 w-8 text-[#B8860B]" />,
      title: "Wine Tasting",
      description:
        "Indulge in our curated selection of premium wines while our sommeliers guide you through each unique flavor profile.",
      image:
        "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <GamepadIcon className="h-8 w-8 text-[#B8860B]" />,
      title: "Game Night",
      description:
        "Join us for an evening of sophisticated entertainment, featuring classic board games and wine pairings.",
      image:
        "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Users className="h-8 w-8 text-[#B8860B]" />,
      title: "Private Events",
      description:
        "Host your special occasions in our elegant venue with customized wine experiences and catering options.",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {exp.icon}
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <button className="bg-[#B8860B] text-white px-6 py-2 rounded hover:bg-[#8B6914] transition-colors w-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
