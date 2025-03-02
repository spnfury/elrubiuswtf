import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Rubius anuncia nueva colaboración con Fortnite',
      excerpt: 'El popular streamer tendrá su propio skin dentro del juego como parte de la nueva temporada.',
      date: '15 de Junio, 2025',
      image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: 2,
      title: 'Próximo libro autobiográfico en camino',
      excerpt: 'Tras el éxito de su primer libro, Rubius prepara una nueva obra con historias nunca antes contadas.',
      date: '3 de Junio, 2025',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: 3,
      title: 'Gira mundial confirmada para 2026',
      excerpt: 'El creador de contenido visitará más de 15 países en su primera gira mundial oficial.',
      date: '28 de Mayo, 2025',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  return (
    <section id="news" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Últimas Noticias</h2>
            <p className="text-gray-400">Mantente informado sobre todo lo relacionado con ElRubius</p>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
          >
            Ver todas las noticias <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-red-900/20 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {item.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-block text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
                >
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Suscríbete al Newsletter</h3>
              <p className="text-gray-400 max-w-md">
                Recibe las últimas noticias, eventos y contenido exclusivo directamente en tu correo.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;