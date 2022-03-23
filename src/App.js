import React from "react";
import "./App.css";
import Download from "./components/download/Download";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features data-aos="fade-up" />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
