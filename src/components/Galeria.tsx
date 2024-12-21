import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imagenes = [
  {
    src: "https://images.unsplash.com/photo-1612160609504-334652c65392",
    titulo: "Cachorros Jugando",
    descripcion: "Nuestros pequeños Teckel disfrutando juntos"
  },
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    titulo: "Momento Familiar",
    descripcion: "Mamá Teckel con sus cachorros"
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    titulo: "Hora de Descanso",
    descripcion: "Dulces sueños de cachorro"
  },
  {
    src: "https://images.unsplash.com/photo-1612160609504-334652c65392",
    titulo: "Diversión al Aire Libre",
    descripcion: "Explorando el jardín"
  },
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    titulo: "Primer Baño",
    descripcion: "Cuidados y limpieza de nuestros cachorros"
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    titulo: "Socialización",
    descripcion: "Aprendiendo a interactuar desde pequeños"
  }
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {imagenes.map((imagen, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={imagen.src}
              alt={imagen.titulo}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{imagen.titulo}</h3>
                <p className="text-sm opacity-90">{imagen.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={imagenes[selectedImage].src}
                alt={imagenes[selectedImage].titulo}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-1">{imagenes[selectedImage].titulo}</h3>
                <p className="text-sm opacity-90">{imagenes[selectedImage].descripcion}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeria;
