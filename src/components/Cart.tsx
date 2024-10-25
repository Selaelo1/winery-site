import { ShoppingCart, X, Loader } from "lucide-react";

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
  onCheckout: () => void;
  isProcessingPayment: boolean;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  isProcessingPayment,
}: CartProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("R", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 relative max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
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
            <>
              <div className="space-y-4 mb-6 overflow-y-auto flex-1">
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
                        <span className="w-8 text-center">{item.quantity}</span>
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

              <div className="border-t pt-4 mt-auto">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-serif">
                    R{total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={onCheckout}
                  disabled={isProcessingPayment}
                  className="w-full bg-[#B8860B] text-white py-3 rounded hover:bg-[#8B6914] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessingPayment ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Secure payment powered by PayGate
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
