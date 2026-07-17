import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Feature1 from './sections/Feature1';
import Feature2 from './sections/Feature2';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Feature1 />
        <Feature2 />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
