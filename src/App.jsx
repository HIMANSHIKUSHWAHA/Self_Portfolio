import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Background Gradient */}
      <div className='fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      
      {/* Main Content */}
      <div className='container mx-auto px-8'> 
        <Navbar />
        <Hero />
        <Tech />
      </div>
    </div>
  );
};

export default App;
