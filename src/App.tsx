import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Wines from "./components/Wines";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import TicketPage from "./components/TicketPage";
import BookingConfirmation from "./components/BookingConfirmation";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Experiences />
                <Wines />
                <Visit />
              </>
            }
          />
          <Route path="/tickets" element={<TicketPage />} />
          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
