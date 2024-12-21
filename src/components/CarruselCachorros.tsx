import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TarjetaCachorro from './TarjetaCachorro';

const cachorros = [
  {
    nombre: "Luna",
    edad: "2 meses",
    genero: "Hembra",
    color: "Rojo Arlequín",
    imagen: "https://images.unsplash.com/photo-1612160609504-334652c65392",
    precio: "$2,500,000 COP"
  },
  {
    nombre: "Max",
    edad: "2.5 meses",
    genero: "Macho",
    color: "Negro Fuego",
    imagen: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    precio: "$2,300,000 COP"
  },
  {
    nombre: "Bella",
    edad: "2 meses",
    genero: "Hembra",
    color: "Chocolate",
    imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    precio: "$2,400,000 COP"
  },
  {
    nombre: "Thor",
    edad: "3 meses",
    genero: "Macho",
    color: "Rojo Sólido",
    imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    precio: "$2,200,000 COP"
  }
] as const;

const CarruselCachorros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return cachorros.length - 1;
      if (nextIndex >= cachorros.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div>
      <div className="relative overflow-hidden">
      <div className="contenedor relative h-[600px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                cachorros[currentIndex],
                cachorros[(currentIndex + 1) % cachorros.length],
                cachorros[(currentIndex + 2) % cachorros.length]
              ].map((cachorro, index) => (
                <TarjetaCachorro key={index} {...cachorro} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles del carrusel */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-primario-100 transition-colors"
        onClick={() => paginate(-1)}
      >
        <svg 
          className="w-6 h-6 text-secundario-800" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-primario-100 transition-colors"
        onClick={() => paginate(1)}
      >
        <svg 
          className="w-6 h-6 text-secundario-800" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cachorros.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primario-500' : 'bg-primario-200'
            }`}
            onClick={() => {
              const direction = index - currentIndex;
              setDirection(direction);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
    <div className="text-center mt-8">
      <a 
        href="/cachorros" 
        className="inline-block bg-primario-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-primario-600 transition-colors"
      >
        Ver todos los cachorros
      </a>
      </div>
      <div className="text-center mt-8">
        <a 
          href="/cachorros" 
          className="inline-block bg-primario-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-primario-600 transition-colors"
        >
          Ver todos los cachorros
        </a>
      </div>
    </div>
  );
};

export default CarruselCachorros;
