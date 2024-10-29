/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { ShoppingCart, X, Truck, Store, Wallet } from "lucide-react";
import DeliveryForm from "./DeliveryForm";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{
    name: string;
    price: string;
    quantity: number;
    image: string;
  }>;
  onUpdateQuantity: (name: string, quantity: number) => void;
  onRemoveItem: (name: string) => void;
  isProcessingPayment: boolean;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<
    "pickup" | "delivery" | null
  >(null);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash" | null>(
    null
  );

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("R", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleDeliveryMethodSelect = (method: "pickup" | "delivery") => {
    setDeliveryMethod(method);
    if (method === "delivery") {
      setShowDeliveryForm(true);
    }
  };

  const handlePaymentMethodSelect = (method: "card" | "cash") => {
    setPaymentMethod(method);
    if (method === "cash") {
      handleCheckout();
    } else {
      // Handle card payment
      handleCheckout();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckout = async (deliveryData?: any) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const orderNum = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();
      setOrderNumber(orderNum);

      if (deliveryData) {
        setCustomerName(deliveryData.name);
      }

      setOrderComplete(true);
    } catch (error) {
      alert("Payment processing failed. Please try again.");
    }
  };

  if (orderComplete) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Thank You{customerName ? `, ${customerName}` : ""}!
          </h2>
          <p className="text-gray-600 mb-4">
            Your order has been successfully placed.
          </p>
          <p className="text-xl font-bold mb-4">Order Number: #{orderNumber}</p>
          {paymentMethod === "cash" && (
            <p className="text-gray-600 mb-6">
              Please have R{total.toFixed(2)} ready for{" "}
              {deliveryMethod === "delivery" ? "the delivery person" : "pickup"}
              .
            </p>
          )}
          <p className="text-gray-600 mb-6">
            {deliveryMethod === "delivery"
              ? "Your wine will be delivered to the provided address."
              : "You can pick up your wine at our estate during business hours."}
          </p>
          <button
            onClick={onClose}
            className="bg-[#B8860B] text-white px-6 py-2 rounded hover:bg-[#8B6914] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingCart className="h-6 w-6 text-[#B8860B]" />
            <h2 className="text-2xl font-serif">Your Cart</h2>
          </div>

          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="space-y-4 mb-6">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-[#B8860B]">{item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.name,
                                Math.max(0, item.quantity - 1)
                              )
                            }
                            className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center border rounded"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.name, item.quantity + 1)
                            }
                            className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center border rounded"
                          >
                            +
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.name)}
                            className="ml-auto text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {showDeliveryForm ? (
                <div className="flex-1 overflow-y-auto">
                  <DeliveryForm
                    onSubmit={(data) => handleCheckout(data)}
                    onBack={() => setShowDeliveryForm(false)}
                  />
                </div>
              ) : (
                <>
                  {!deliveryMethod ? (
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-serif">
                          R{total.toFixed(2)}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleDeliveryMethodSelect("pickup")}
                          className="w-full border border-[#B8860B] text-[#B8860B] py-3 rounded hover:bg-[#B8860B] hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                          <Store className="h-5 w-5" />
                          Pick Up at Estate
                        </button>
                        <button
                          onClick={() => handleDeliveryMethodSelect("delivery")}
                          className="w-full border border-[#B8860B] text-[#B8860B] py-3 rounded hover:bg-[#B8860B] hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                          <Truck className="h-5 w-5" />
                          Deliver to Me
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="text-xl font-serif">
                          R{total.toFixed(2)}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <button
                          onClick={() => handlePaymentMethodSelect("card")}
                          className="w-full bg-[#B8860B] text-white py-3 rounded hover:bg-[#8B6914] transition-colors flex items-center justify-center gap-2"
                        >
                          <Store className="h-5 w-5" />
                          Pay with Card
                        </button>
                        <button
                          onClick={() => handlePaymentMethodSelect("cash")}
                          className="w-full border border-[#B8860B] text-[#B8860B] py-3 rounded hover:bg-[#B8860B] hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                          <Wallet className="h-5 w-5" />
                          Pay with Cash
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
