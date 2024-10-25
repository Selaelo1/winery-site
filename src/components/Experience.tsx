import { Wine, GlassWater, Calendar, MapPin, Clock } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Wine Tasting",
      description:
        "Indulge in our premium wine selection guided by expert sommeliers",
      icon: <Wine className="h-8 w-8 text-[#CFB53B]" />,
      price: "R350 pp",
    },
    {
      title: "Game Night",
      description: "Join us for an evening of entertainment and fine wine",
      icon: <GlassWater className="h-8 w-8 text-[#CFB53B]" />,
      price: "R450 pp",
    },
  ];

  return (
    <div id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Our Experiences
          </h2>
          <p className="text-xl text-gray-600">
            Immerse yourself in the world of fine wines
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {exp.icon}
                <h3 className="text-2xl font-serif ml-4">{exp.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{exp.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#800000] font-semibold">
                  {exp.price}
                </span>
                <button className="bg-black text-white px-6 py-2 rounded hover:bg-[#800000] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white rounded-lg p-8">
          <h3 className="text-3xl font-serif mb-8 text-center">Visit Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-[#CFB53B] mr-4" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Stellenbosch, South Africa</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-[#CFB53B] mr-4" />
              <div>
                <h4 className="font-semibold">Hours</h4>
                <p>10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-[#CFB53B] mr-4" />
              <div>
                <h4 className="font-semibold">Reservations</h4>
                <p>Required for groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
