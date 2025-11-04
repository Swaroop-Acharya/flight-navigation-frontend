import React, { useEffect } from "react";
import FlightSearchBar from "./pages/FlightSearchBar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import WeatherDashboard from "./pages/WeatherDetails";
import SearchAltRoute from "./pages/SearchAltRoute";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // Auto-scroll to video on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      const videoSection = document.getElementById('linkedin-video-section');
      if (videoSection) {
        const navbarHeight = 80;
        const elementPosition = videoSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[#071A3D]">
      <nav className="bg-yellow-600 px-4 sm:px-6 py-3">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="text-white text-lg sm:text-xl font-bold break-words">⚠️ Backend Service Notice</div>
            <div className="text-white text-sm sm:text-base font-semibold text-center sm:text-left break-words">
              The backend is currently down due to API restrictions used to build this project.
            </div>
          </div>
        </div>
      </nav>
      <Navbar />
      <div id="linkedin-video-section" className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2">
                  Watch the below demo video while we fix the backend - until Amadeus API restrictions are fixed
                </h3>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mb-6">
            <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6">
              <div className="aspect-video w-full" style={{ maxWidth: "100%", minHeight: "400px" }}>
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7207322648828166144?compact=1" 
                  height="100%" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="Embedded post"
                  className="rounded-lg w-full h-full"
                  style={{ minHeight: "400px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<FlightSearchBar />} />
        <Route path="/dashboard" element={<WeatherDashboard />} />
        <Route path="/altroute" element={<SearchAltRoute />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
