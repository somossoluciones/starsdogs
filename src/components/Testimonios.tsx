import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonios = [
  {
    nombre: "Ana María Rodríguez",
    ciudad: "Bogotá",
    texto: "Adoptar a Luna fue la mejor decisión. Es una compañera increíble y ha traído tanta alegría a nuestra familia. El proceso fue muy profesional y nos brindaron todo el apoyo necesario.",
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5
  },
  {
    nombre: "Carlos Mendoza",
    ciudad: "Medellín",
    texto: "Max se ha adaptado perfectamente a nuestra familia. La atención y el seguimiento post-adopción han sido excelentes. Recomiendo 100% adoptar un Teckel aquí.",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5
  },
  {
    nombre: "Laura Valencia",
    ciudad: "Cali",
    texto: "Estamos encantados con nuestra pequeña Bella. La crianza y socialización temprana se nota en su comportamiento. Es una perrita muy equilibrada y cariñosa.",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5
  }
];

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonios.length - 1;
      if (newIndex >= testimonios.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <div className="relative overflow-hidden py-8">
      <div className="max-w-4xl mx-auto px-4">
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
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-full overflow-hidden">
                  <img
                    src={testimonios[currentIndex].imagen}
                    alt={testimonios[currentIndex].nombre}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Estrellas de calificación */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonios[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-secundario-700 mb-6">
                  "{testimonios[currentIndex].texto}"
                </blockquote>

                <div className="text-primario-600 font-semibold">
                  {testimonios[currentIndex].nombre}
                </div>
                <div className="text-secundario-500">
                  {testimonios[currentIndex].ciudad}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-white shadow-md hover:bg-primario-50 transition-colors"
          >
            <svg 
              className="w-6 h-6 text-secundario-600" 
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
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-white shadow-md hover:bg-primario-50 transition-colors"
          >
            <svg 
              className="w-6 h-6 text-secundario-600" 
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
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const direction = index - currentIndex;
                setDirection(direction);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primario-500' : 'bg-primario-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
