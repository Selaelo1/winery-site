import { useLocation, useNavigate } from "react-router-dom";
import { Check, Calendar, Clock, Users } from "lucide-react";

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber, customerName, experience, date, time, guests } =
    location.state || {};

  if (!orderNumber) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-500" />
          </div>

          <h1 className="text-2xl font-serif mb-2">
            Thank You, {customerName}!
          </h1>
          <p className="text-gray-600 mb-6">Your booking has been confirmed.</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-lg font-bold mb-2">
              Order Number: #{orderNumber}
            </p>
            <p className="text-gray-600">{experience}</p>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#B8860B]" />
              <div>
                <p className="font-medium">Date</p>
                <p className="text-gray-600">
                  {new Date(date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#B8860B]" />
              <div>
                <p className="font-medium">Time</p>
                <p className="text-gray-600">{time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#B8860B]" />
              <div>
                <p className="font-medium">Guests</p>
                <p className="text-gray-600">
                  {guests} {parseInt(guests) === 1 ? "person" : "people"}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-8 bg-[#B8860B] text-white px-6 py-2 rounded hover:bg-[#8B6914] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
