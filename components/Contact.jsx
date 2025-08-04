"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Dirección",
      info: "Calle Principal 123, Ciudad, País",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Teléfono",
      info: "+1 (555) 123-4567",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      info: "contacto@tumarca.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Horario",
      info: "Lun - Vie: 9:00 AM - 6:00 PM",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              Contáctanos
            </span>
          </div>
          <h2 className="text-responsive-lg font-black text-gray-900 mb-6">
            Hablemos de tu
            <span className="block text-gradient bg-gradient-primary">
              Próximo Proyecto
            </span>
          </h2>
          <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
            ¿Tienes una idea brillante? Nos encantaría escucharla y ayudarte a
            convertirla en realidad. Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-custom-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-3"
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
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all-smooth resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, ideas, necesidades..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-4 px-8 rounded-xl font-bold hover:shadow-custom-lg transition-all-smooth btn-hover-lift disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="spinner"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Enviar Mensaje
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Estamos aquí para ayudarte. Contáctanos a través de cualquiera
                  de estos medios y te responderemos en menos de 24 horas.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-custom-md hover:shadow-custom-lg transition-all-smooth card-hover"
                  >
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 font-medium">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="bg-white rounded-2xl shadow-custom-md p-8">
                <h4 className="font-bold text-gray-900 text-lg mb-6">
                  Síguenos
                </h4>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "linkedin", "instagram"].map(
                    (social, index) => (
                      <a
                        key={social}
                        href="#"
                        className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-custom-md transition-all-smooth btn-hover-lift"
                      >
                        <span className="text-sm font-bold">
                          {social[0].toUpperCase()}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Response time indicator */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold">
                    Respondemos en menos de 24 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
