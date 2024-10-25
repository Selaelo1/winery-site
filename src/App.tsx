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
    </div>
  );
}

export default App;
