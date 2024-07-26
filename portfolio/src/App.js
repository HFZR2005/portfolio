import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <section id="home" className="flex flex-col h-screen items-center justify-center border-b-2 border-black">
          <h1 className="hero-text leading-none">Welcome to My <br /> Portfolio!</h1>
        </section>
        <section id="about" className="flex flex-row h-auto items-center justify-center pt-20 border-b-2 border-black bg-tertiary">
          <span className="section-text leading-none text-right pb-20 pr-10">About <br /> Me </span>
          <div className="w-80 pl-10 font-montserrat items-center justify-center pb-20 text-xl">Currently studying Computer Science at the University of Cambridge. Love solving difficult problems and learning new things. A fan of non-fiction books (currently reading "Who Rules The World" by Noam Chomksy)</div>
          {/* Content for About section */}
        </section>
        <section id="projects" className="flex flex-col h-auto items-center justify-center border-b-2 border-black bg-quaternary">
          <a className="project-text mt-0 flex flex-col items-start">Projects</a>
          {/* Content for Projects section */}
        </section>
        <section id="services" className="flex flex-col h-screen items-center justify-center pt-20 border-b-2 border-black">
          <h1 className="text-4xl font-bold text-center">Services</h1>
          <Card title="test" content="test" />    
    </section>
        <section id="contact" className="flex flex-col h-screen items-center justify-center pt-20 border border-b-2 border-black bg-tertiary">
          <h1 className="text-4xl font-bold text-center">Contact</h1>
          {/* Content for Contact section */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

