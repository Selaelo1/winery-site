import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Wines from "./components/Wines";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Experiences />
      <Wines />
      <Visit />
      <Footer />
      <footer className="bg-black text-gray-400 py-6 text-center">
        <p>
          © {new Date().getFullYear()} Lefokeni Winery. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
