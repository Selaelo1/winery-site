import { useState } from "react";
import WineModal from "./WineModal";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";
import { Wine, CartItem } from "../types/wine";

export default function Wines() {
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isProcessingPayment] = useState(false);

  const wines: Wine[] = [
    {
      name: "Reserve Cabernet Sauvignon",
      year: "2018",
      description: "Bold and complex with notes of blackberry and cedar",
      price: "R450",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      history:
        "Our flagship Cabernet Sauvignon is crafted from grapes grown in our oldest vineyard blocks, planted in 1985. Each vintage tells the story of our terroir and dedication to excellence.",
      awards: [
        "Double Gold - Veritas Wine Awards 2020",
        "95 Points - Tim Atkin MW South Africa Report",
        "Trophy for Best Cabernet - Old Mutual Trophy Wine Show",
      ],
      pairings: [
        "Aged ribeye steak",
        "Wild mushroom risotto",
        "Dark chocolate truffles",
      ],
    },
    {
      name: "Estate Chardonnay",
      year: "2020",
      description: "Elegant with hints of vanilla and tropical fruits",
      price: "R380",
      image:
        "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      history:
        "Our Chardonnay vines benefit from cool ocean breezes, creating a wine that perfectly balances freshness with complexity. First planted in 1992, these blocks consistently produce exceptional fruit.",
      awards: [
        "5 Stars - Platter's Wine Guide",
        "Gold Medal - Chardonnay du Monde",
        "Best in Class - International Wine Challenge",
      ],
      pairings: [
        "Grilled lobster",
        "Creamy pasta dishes",
        "Soft ripened cheeses",
      ],
    },
    {
      name: "Signature Blend",
      year: "2019",
      description: "A harmonious blend of Cabernet and Merlot",
      price: "R520",
      image:
        "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      history:
        "Our Signature Blend represents the pinnacle of our winemaking philosophy. Each vintage is carefully crafted to showcase the best characteristics of our estate-grown Cabernet Sauvignon and Merlot.",
      awards: [
        "97 Points - Wine Spectator",
        "Platinum Award - Decanter World Wine Awards",
        "Top 100 Wines of the Year - Wine Enthusiast",
      ],
      pairings: ["Braised lamb shank", "Aged Gouda", "Dark chocolate desserts"],
    },
  ];

  const addToCart = (wine: Wine) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === wine.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === wine.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...wine, quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(name);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === name ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (name: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  return (
    <section id="wines" className="py-20 bg-[#1A1A1A] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif">Our Collection</h2>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#B8860B] text-white px-4 py-2 rounded hover:bg-[#8B6914] transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>
              Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </span>
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {wines.map((wine, index) => (
            <div
              key={index}
              className="border border-[#B8860B] rounded-lg overflow-hidden hover:bg-black/30 transition-colors"
            >
              <div className="relative h-64">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{wine.name}</h3>
                <p className="text-[#B8860B] mb-3">{wine.year}</p>
                <p className="text-gray-400 mb-4">{wine.description}</p>
                <div className="space-y-3">
                  <p className="text-xl font-serif">{wine.price}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedWine(wine)}
                      className="bg-transparent border border-[#B8860B] text-[#B8860B] px-4 py-2 rounded hover:bg-[#B8860B] hover:text-white transition-colors w-full"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => addToCart(wine)}
                      className="bg-[#B8860B] text-white px-4 py-2 rounded hover:bg-[#8B6914] transition-colors w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWine && (
        <WineModal
          isOpen={!!selectedWine}
          onClose={() => setSelectedWine(null)}
          wine={selectedWine}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        isProcessingPayment={isProcessingPayment}
      />
    </section>
  );
}
