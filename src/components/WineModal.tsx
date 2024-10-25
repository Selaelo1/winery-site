import { X, Grape, History, Award } from "lucide-react";

interface WineModalProps {
  isOpen: boolean;
  onClose: () => void;
  wine: {
    name: string;
    year: string;
    description: string;
    price: string;
    image: string;
    history: string;
    awards: string[];
    pairings: string[];
  };
}

export default function WineModal({ isOpen, onClose, wine }: WineModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-serif mb-2">{wine.name}</h2>
              <p className="text-[#B8860B] text-lg">{wine.year}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <History className="h-5 w-5 text-[#B8860B]" />
                <h3 className="font-semibold">History</h3>
              </div>
              <p className="text-gray-600">{wine.history}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-[#B8860B]" />
                <h3 className="font-semibold">Awards</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {wine.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Grape className="h-5 w-5 text-[#B8860B]" />
                <h3 className="font-semibold">Food Pairings</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {wine.pairings.map((pairing, index) => (
                  <li key={index}>{pairing}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
