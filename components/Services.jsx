export default function Services() {
  const services = [
    {
      icon: "🚀",
      title: "Desarrollo Web",
      description:
        "Creamos sitios web modernos y responsivos que impulsan tu negocio al siguiente nivel.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: "📱",
      title: "Apps Móviles",
      description:
        "Aplicaciones móviles nativas e híbridas para iOS y Android con la mejor experiencia de usuario.",
      color: "from-green-500 to-blue-600",
    },
    {
      icon: "💡",
      title: "Consultoría",
      description:
        "Asesoramiento estratégico en tecnología para optimizar tus procesos empresariales.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: "🔧",
      title: "Mantenimiento",
      description:
        "Soporte técnico continuo y actualizaciones para mantener tu sistema funcionando perfectamente.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: "🎨",
      title: "Diseño UX/UI",
      description:
        "Diseños atractivos y funcionales que convierten visitantes en clientes satisfechos.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Soluciones en la nube escalables y seguras para tu infraestructura tecnológica.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-responsive-lg font-black text-gray-900 mb-6">
            Soluciones Tecnológicas
            <span className="block text-gradient bg-gradient-primary">
              Innovadoras
            </span>
          </h2>
          <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideas en realidades digitales con tecnología de
            vanguardia y experiencias excepcionales para tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-custom-md hover:shadow-custom-xl transition-all-smooth card-hover overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl p-0.5`}
              >
                <div className="bg-white rounded-2xl h-full w-full p-8">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-300`}
                    ></div>
                    <div className="relative text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">Saber más</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">¿No encuentras lo que buscas?</p>
          <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold transition-all-smooth btn-hover-lift shadow-custom-lg hover:shadow-custom-xl">
            Consulta Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}
