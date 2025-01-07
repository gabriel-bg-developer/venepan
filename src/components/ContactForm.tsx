'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For example, sending to an API endpoint
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600">
            ¿Tienes alguna pregunta o comentario? Nos encantaría escucharte. 
            Ya sea que quieras distribuir nuestros productos, hacer un pedido especial 
            o simplemente saludar, estamos aquí para ayudarte.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm"
        >
          {/* Email Field */}
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                focus:ring-[#DEB887] focus:border-[#DEB887] outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label 
              htmlFor="subject" 
              className="block text-sm font-medium text-gray-700"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                focus:ring-[#DEB887] focus:border-[#DEB887] outline-none transition-colors"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                focus:ring-[#DEB887] focus:border-[#DEB887] outline-none transition-colors"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white border-4 border-black px-6 py-2 
                hover:bg-white hover:text-black transition-colors duration-300"

          >
            ENVIAR MENSAJE
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;
