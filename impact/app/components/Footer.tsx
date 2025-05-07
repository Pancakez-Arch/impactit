import React from 'react';
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <Mountain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Frilufts Utleie</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Vi tilbyr kvalitetsutstyr for friluftsliv og eventyr i naturen. Vårt mål er å gjøre utendørsaktiviteter tilgjengelig for alle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Raske lenker</h3>
            <ul className="space-y-2">
              {['Hjem', 'Om oss', 'Utstyr', 'Ansatte', 'Vilkår', 'Personvern'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt oss</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Naturveien 123, 0123 Oslo, Norge</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+4712345678" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +47 123 45 678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@friluftsutleie.no" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@friluftsutleie.no
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Frilufts Utleie. Alle rettigheter reservert.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
                  Personvernerklæring
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
                  Vilkår for bruk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;