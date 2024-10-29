import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface DeliveryFormProps {
  onSubmit: (data: unknown) => void;
  onBack: () => void;
}

export default function DeliveryForm({ onSubmit, onBack }: DeliveryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    specialInstructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </button>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Delivery Address
        </label>
        <textarea
          required
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            type="text"
            required
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Special Instructions (Optional)
        </label>
        <textarea
          value={formData.specialInstructions}
          onChange={(e) =>
            setFormData({ ...formData, specialInstructions: e.target.value })
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          rows={2}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#B8860B] text-white py-3 rounded hover:bg-[#8B6914] transition-colors"
      >
        Proceed to Payment
      </button>
    </form>
  );
}
