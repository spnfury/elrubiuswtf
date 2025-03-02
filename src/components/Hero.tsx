import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-red-900/40 to-blue-900/60 mix-blend-multiply z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
          ElRubiusWTF
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Bienvenidos al sitio oficial de Rubius. Descubre contenido exclusivo, noticias, eventos y mucho más.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#content" 
            className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Ver Contenido <ArrowRight size={18} />
          </a>
          <a 
            href="#shop" 
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition-all"
          >
            Tienda Oficial
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;