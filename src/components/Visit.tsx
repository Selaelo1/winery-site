import React, { useState } from "react";
import BookingModal from "./BookingModal";

export default function Visit() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="visit" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Visit Us</h2>
            <p className="text-gray-600 mb-8">
              Located in the heart of South Africa's wine country, Lefokeni
              Winery welcomes you to experience our world-class wines and warm
              hospitality.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Opening Hours</h3>
                <p className="text-gray-600">Tuesday - Sunday: 10:00 - 18:00</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">
                  123 Wine Estate Road
                  <br />
                  Stellenbosch
                  <br />
                  South Africa
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#800000] text-white px-6 py-2 rounded hover:bg-[#600000] transition-colors"
              >
                Book a Visit
              </button>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543418219-44e30b057fea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Lefokeni Winery Estate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
