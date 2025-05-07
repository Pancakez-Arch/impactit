import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' 
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center sm:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Oppdag naturen med riktig utstyr
          </h1>
          <p className="mt-6 text-xl text-white text-opacity-90 max-w-lg">
            Vi hjelper deg med å finne det perfekte utstyret for ditt neste eventyr i naturen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="#utstyr"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Se utstyr
            </a>
            <a
              href="#kontakt"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-16 rounded-full bg-white/25 overflow-hidden">
          <div className="w-full bg-white animate-[scroll-down_2s_ease-in-out_infinite] h-4"></div>
        </div>
        <p className="text-white text-opacity-80 mt-2 text-sm">Scroll ned</p>
      </div>
    </div>
  );
};

export default Hero;