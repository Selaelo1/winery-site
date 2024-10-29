import { useLocation, useNavigate } from "react-router-dom";
import { Check, Mail } from "lucide-react";

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, experience, date, time, guests, total, paymentMethod } =
    location.state || {};

  if (!email) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-500" />
          </div>

          <h1 className="text-2xl font-serif mb-4">Booking Confirmed!</h1>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
            <Mail className="h-5 w-5" />
            <p>Confirmation sent to {email}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold mb-4">Booking Details</h2>
            <div className="space-y-2">
              <p>
                <span className="text-gray-600">Experience:</span> {experience}
              </p>
              <p>
                <span className="text-gray-600">Date:</span>{" "}
                {new Date(date).toLocaleDateString()}
              </p>
              <p>
                <span className="text-gray-600">Time:</span> {time}
              </p>
              <p>
                <span className="text-gray-600">Guests:</span> {guests}
              </p>
              <p>
                <span className="text-gray-600">Total Amount:</span> R{total}
              </p>
              <p>
                <span className="text-gray-600">Payment Method:</span>{" "}
                {paymentMethod === "card" ? "Credit Card" : "Cash on Arrival"}
              </p>
            </div>
          </div>

          {paymentMethod === "cash" && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
              <p className="text-yellow-800">
                Please have R{total} ready for payment upon arrival.
              </p>
            </div>
          )}

          <button
            onClick={() => navigate("/")}
            className="bg-[#B8860B] text-white px-6 py-2 rounded hover:bg-[#8B6914] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
