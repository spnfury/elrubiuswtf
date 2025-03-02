import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Twitch, Twitter, ShoppingBag, Calendar, Newspaper, Menu, X, ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import LatestContent from './components/LatestContent';
import Events from './components/Events';
import Shop from './components/Shop';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-500">
            ElRubiusWTF
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#content" className="hover:text-red-400 transition-colors">Contenido</a>
            <a href="#news" className="hover:text-red-400 transition-colors">Noticias</a>
            <a href="#events" className="hover:text-red-400 transition-colors">Eventos</a>
            <a href="#shop" className="hover:text-red-400 transition-colors">Tienda</a>
            
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://www.instagram.com/elrubiuswtf/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/user/elrubiusOMG" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.twitch.tv/rubius" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                <Twitch size={20} />
              </a>
              <a href="https://twitter.com/Rubiu5" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm absolute top-full left-0 w-full py-4 shadow-lg">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#content" 
                className="flex items-center justify-between py-2 border-b border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contenido</span>
                <ChevronRight size={16} />
              </a>
              <a 
                href="#news" 
                className="flex items-center justify-between py-2 border-b border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Noticias</span>
                <ChevronRight size={16} />
              </a>
              <a 
                href="#events" 
                className="flex items-center justify-between py-2 border-b border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Eventos</span>
                <ChevronRight size={16} />
              </a>
              <a 
                href="#shop" 
                className="flex items-center justify-between py-2 border-b border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Tienda</span>
                <ChevronRight size={16} />
              </a>
              
              <div className="flex items-center justify-center space-x-6 pt-4">
                <a href="https://www.instagram.com/elrubiuswtf/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
                <a href="https://www.youtube.com/user/elrubiusOMG" target="_blank" rel="noopener noreferrer">
                  <Youtube size={24} />
                </a>
                <a href="https://www.twitch.tv/rubius" target="_blank" rel="noopener noreferrer">
                  <Twitch size={24} />
                </a>
                <a href="https://twitter.com/Rubiu5" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <LatestContent />
        <NewsSection />
        <Events />
        <Shop />
      </main>

      <Footer />
    </div>
  );
}

export default App;