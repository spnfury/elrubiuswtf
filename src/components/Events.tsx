import React from 'react';
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Meet & Greet en Madrid',
      date: '15 de Julio, 2025',
      location: 'IFEMA Madrid, España',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      attendees: '5,000+',
      status: 'Próximamente'
    },
    {
      id: 2,
      title: 'Gamergy 2025',
      date: '23-25 de Agosto, 2025',
      location: 'Barcelona, España',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      attendees: '10,000+',
      status: 'Entradas Disponibles'
    },
    {
      id: 3,
      title: 'TwitchCon 2025',
      date: '10-12 de Octubre, 2025',
      location: 'San Diego, California',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      attendees: '25,000+',
      status: 'Confirmado'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Próximos Eventos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conoce dónde podrás ver a ElRubius en persona y participar en eventos exclusivos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-xs font-bold px-3 py-1">
                  {event.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar size={16} className="mr-2 text-red-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={16} className="mr-2 text-red-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users size={16} className="mr-2 text-red-500" />
                    {event.attendees} asistentes esperados
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    Más Info
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white flex items-center gap-1"
                  >
                    Entradas <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full font-medium transition-all transform hover:scale-105"
          >
            Ver Todos los Eventos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
