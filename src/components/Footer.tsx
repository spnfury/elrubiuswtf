import React from 'react';
import { Youtube, Instagram, Twitch, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Fans de ElRubius</h3>
            <p className="text-gray-400 mb-6">
              Comunidad no oficial de fans de Rubén Doblas Gundersen, mejor conocido como ElRubius, uno de los creadores de contenido más queridos del mundo hispanohablante.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/elrubiuswtf/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/user/elrubiusOMG" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://www.twitch.tv/rubius" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitch size={18} />
              </a>
              <a href="https://twitter.com/Rubiu5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Inicio</a></li>
              <li><a href="#content" className="hover:text-red-500 transition-colors">Contenido</a></li>
              <li><a href="#news" className="hover:text-red-500 transition-colors">Noticias</a></li>
              <li><a href="#events" className="hover:text-red-500 transition-colors">Eventos</a></li>
              <li><a href="#shop" className="hover:text-red-500 transition-colors">Tienda</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Información</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                <span>fansderubius@ejemplo.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                <span>España</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                <span>Solo para colaboraciones</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fans de ElRubius. Este es un sitio de fans no oficial. No estamos afiliados con ElRubius o sus empresas.
          </p>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-red-500 transition-colors">Términos</a>
            <span>•</span>
            <a href="#" className="hover:text-red-500 transition-colors">Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-red-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
