import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const LatestContent = () => {
  const contentItems = [
    {
      id: 1,
      type: 'video',
      title: 'Mi Experiencia en Japón',
      thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      platform: 'YouTube',
      date: '2 días atrás'
    },
    {
      id: 2,
      type: 'stream',
      title: 'Jugando Fortnite con Suscriptores',
      thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      platform: 'Twitch',
      date: '1 semana atrás'
    },
    {
      id: 3,
      type: 'video',
      title: 'Reaccionando a Memes con Amigos',
      thumbnail: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      platform: 'YouTube',
      date: '2 semanas atrás'
    },
    {
      id: 4,
      type: 'stream',
      title: 'Minecraft Extremo - Episodio Final',
      thumbnail: 'https://images.unsplash.com/photo-1587573089734-599851b2c3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      platform: 'Twitch',
      date: '3 semanas atrás'
    }
  ];

  return (
    <section id="content" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Último Contenido</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mantente al día con los videos y streams más recientes de ElRubius en todas las plataformas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:transform hover:scale-105 group"
            >
              <div className="relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <Play size={24} fill="white" />
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-xs font-bold px-2 py-1 rounded">
                  {item.platform}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <a href="#" className="text-red-400 hover:text-red-300 flex items-center gap-1 text-sm">
                    Ver <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-colors"
          >
            Ver Todo el Contenido
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestContent;