import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  GlassWater,
  GamepadIcon,
  Wallet,
  CreditCard,
} from "lucide-react";

export default function TicketPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { experience } = location.state || {};

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
  });

  const [, setPaymentMethod] = useState<"card" | "cash" | null>(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "wine":
        return <GlassWater className="h-8 w-8 text-[#B8860B]" />;
      case "game":
        return <GamepadIcon className="h-8 w-8 text-[#B8860B]" />;
      case "event":
        return <Users className="h-8 w-8 text-[#B8860B]" />;
      default:
        return <GlassWater className="h-8 w-8 text-[#B8860B]" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };

  const handlePayment = async (method: "card" | "cash") => {
    setPaymentMethod(method);

    if (method === "cash") {
      // Handle cash payment
      navigate("/booking-confirmation", {
        state: {
          email: formData.email,
          experience: experience.title,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          total: (
            parseInt(formData.guests) *
            parseInt(experience.price.replace("R", ""))
          ).toFixed(2),
          paymentMethod: "cash",
        },
      });
    } else {
      // Simulate PayGate redirect
      const total = (
        parseInt(formData.guests) * parseInt(experience.price.replace("R", ""))
      ).toFixed(2);

      // In a real implementation, this would redirect to PayGate
      navigate("/booking-confirmation", {
        state: {
          email: formData.email,
          experience: experience.title,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          total,
          paymentMethod: "card",
        },
      });
    }
  };

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No experience selected. Please go back and select an experience.</p>
      </div>
    );
  }

  if (showPaymentOptions) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-md mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-serif mb-6">Select Payment Method</h2>
            <div className="space-y-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Total Amount:</span>
                <span className="text-xl font-serif">
                  R
                  {(
                    parseInt(formData.guests) *
                    parseInt(experience.price.replace("R", ""))
                  ).toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => handlePayment("card")}
                className="w-full bg-[#B8860B] text-white py-3 rounded hover:bg-[#8B6914] transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="h-5 w-5" />
                Pay with Card
              </button>
              <button
                onClick={() => handlePayment("cash")}
                className="w-full border border-[#B8860B] text-[#B8860B] py-3 rounded hover:bg-[#B8860B] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Wallet className="h-5 w-5" />
                Pay with Cash
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-3 mb-2">
                {getIcon(experience.iconType)}
                <h1 className="text-2xl font-serif">{experience.title}</h1>
              </div>
              <p className="text-lg">{experience.price} per person</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <select
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2"
                  >
                    <option value="">Select time</option>
                    {Array.from({ length: 17 }, (_, i) => i + 10).map(
                      (hour) => (
                        <option key={hour} value={`${hour}:00`}>
                          {hour}:00
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <select
                  required
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2"
                >
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">
                  Total for {formData.guests} guests:
                </span>
                <span className="text-xl font-serif">
                  R
                  {(
                    parseInt(formData.guests) *
                    parseInt(experience.price.replace("R", ""))
                  ).toFixed(2)}
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B8860B] text-white py-3 rounded hover:bg-[#8B6914] transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
