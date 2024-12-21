import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se podría agregar la lógica para enviar el formulario
    // Por ahora solo mostraremos el mensaje de éxito
    setEnviado(true);
    
    // Redirigir a WhatsApp con la información del formulario
    const mensaje = `Hola, soy ${formData.nombre}. ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/573218021869?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-secundario-700 font-medium mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-secundario-200 focus:ring-2 focus:ring-primario-500 focus:border-transparent transition-colors"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-secundario-700 font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-secundario-200 focus:ring-2 focus:ring-primario-500 focus:border-transparent transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-secundario-700 font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-secundario-200 focus:ring-2 focus:ring-primario-500 focus:border-transparent transition-colors"
            placeholder="Tu número de teléfono"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-secundario-700 font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-secundario-200 focus:ring-2 focus:ring-primario-500 focus:border-transparent transition-colors resize-none"
            placeholder="¿Qué te gustaría saber sobre nuestros cachorros Teckel?"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primario-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primario-600 transition-colors flex items-center justify-center gap-2"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contactar por WhatsApp
        </motion.button>
      </form>

      {/* Mensaje de éxito */}
      <AnimatePresence>
        {enviado && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center"
          >
            ¡Gracias por tu mensaje! Te contactaremos pronto.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FormularioContacto;