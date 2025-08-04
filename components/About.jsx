export default function About() {
  const stats = [
    { number: "100+", label: "Proyectos Completados", icon: "🚀" },
    { number: "50+", label: "Clientes Satisfechos", icon: "😊" },
    { number: "5+", label: "Años de Experiencia", icon: "📅" },
    { number: "24/7", label: "Soporte Técnico", icon: "🛠️" },
  ];

  const features = [
    "Desarrollo ágil y metodologías modernas",
    "Tecnologías de última generación",
    "Equipo multidisciplinario experto",
    "Comunicación transparente y constante",
  ];

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Sobre Nosotros
              </span>
            </div>

            <h2 className="text-responsive-lg font-black text-gray-900 mb-6">
              Innovación y Excelencia
              <span className="block text-gradient bg-gradient-primary">
                en cada Proyecto
              </span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos un equipo apasionado de{" "}
                <span className="font-semibold text-blue-600">
                  desarrolladores y diseñadores
                </span>{" "}
                comprometidos con crear soluciones tecnológicas innovadoras. Con
                más de 5 años de experiencia en el mercado, hemos ayudado a
                empresas de todos los tamaños a digitalizar sus procesos y
                alcanzar sus objetivos.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro enfoque se basa en entender las necesidades específicas
                de cada cliente para ofrecer{" "}
                <span className="font-semibold text-blue-600">
                  soluciones personalizadas
                </span>{" "}
                que generen resultados reales y medibles para su negocio.
              </p>
            </div>

            {/* Features list */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-custom-md transition-all-smooth card-hover"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-black text-gradient bg-gradient-primary mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-custom-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Equipo trabajando"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-primary text-white p-8 rounded-2xl shadow-custom-xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-black mb-1">+5</div>
                  <div className="text-sm font-medium">Años de</div>
                  <div className="text-sm font-medium">Experiencia</div>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-custom-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-semibold text-sm">
                    En línea
                  </span>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-float"></div>
              <div
                className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-float"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
