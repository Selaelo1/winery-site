export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-200 mb-6">
            Experience Luxury in Every Sip
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            South Africa's Premier Wine Estate
          </p>
          <button className="bg-[#B8860B] text-white px-8 py-3 rounded hover:bg-[#8B6914] transition-colors">
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
}
