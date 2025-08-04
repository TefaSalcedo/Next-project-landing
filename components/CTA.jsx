export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="glass text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30">
              🚀 ¡Empezemos tu proyecto!
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-responsive-lg font-black text-white mb-6 leading-tight">
            ¿Listo para Transformar
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              tu Visión en Realidad?
            </span>
          </h2>

          {/* Description */}
          <p className="text-responsive-md text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Trabajemos juntos para convertir tus ideas en soluciones digitales
            extraordinarias. Contáctanos hoy y obtén una{" "}
            <span className="font-semibold text-white">consulta gratuita</span>{" "}
            con nuestros expertos.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group w-full sm:w-auto bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:shadow-custom-xl transition-all-smooth btn-hover-lift text-lg">
              <span className="flex items-center justify-center gap-3">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Empezar Proyecto
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </span>
            </button>

            <button className="group w-full sm:w-auto glass text-white px-10 py-4 rounded-full font-bold border border-white/30 hover:bg-white/20 transition-all-smooth btn-hover-lift text-lg">
              <span className="flex items-center justify-center gap-3">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Ver Portfolio
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">24h</div>
              <div className="text-blue-100">Respuesta Garantizada</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">100%</div>
              <div className="text-blue-100">Satisfacción del Cliente</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-black text-white mb-2">5★</div>
              <div className="text-blue-100">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
