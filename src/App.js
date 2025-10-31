import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
