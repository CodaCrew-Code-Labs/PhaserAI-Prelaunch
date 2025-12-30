import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from './components/Header';
import Home from './components/Home';
import LaunchTimer from './components/LaunchTimer';
import Category from './components/Category';
import About from './components/About';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="overflow-hidden">
        <Home />
        <LaunchTimer />
        <Category />
        <About />
        <Features />
        <Newsletter />
      </main>
      <Footer />
      <ScrollUp />
      <SpeedInsights />
    </div>
  );
}

export default App;