export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      company: "TechStart",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b790?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Excelente trabajo. El equipo entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas.",
      rating: 5,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Carlos Rodríguez",
      position: "Director, InnovaApp",
      company: "InnovaApp",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Profesionales comprometidos con la calidad. Nuestra aplicación móvil ha sido un éxito total gracias a su experiencia.",
      rating: 5,
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Ana Martínez",
      position: "Fundadora, DigitalPlus",
      company: "DigitalPlus",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "La comunicación fue excelente durante todo el proyecto. Siempre estuvieron disponibles para resolver nuestras dudas.",
      rating: 5,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-200 rounded-full opacity-10 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              Testimonios
            </span>
          </div>
          <h2 className="text-responsive-lg font-black text-gray-900 mb-6">
            Lo que Dicen Nuestros
            <span className="block text-gradient bg-gradient-primary">
              Clientes
            </span>
          </h2>
          <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
            Descubre por qué confían en nosotros para sus proyectos más
            importantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-custom-md hover:shadow-custom-xl transition-all-smooth card-hover overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote icon background */}
              <div className="absolute top-6 right-6 opacity-10">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <div className="p-8">
                {/* Rating stars */}
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-custom-md group-hover:scale-110 transition-transform"
                    />
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 font-medium">
                      {testimonial.position}
                    </p>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${testimonial.color} mt-1`}
                    >
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">
            Confían en nosotros más de 50+ empresas
          </p>
          <div className="flex justify-center items-center space-x-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <div className="text-2xl font-bold text-gray-400">LOGO 1</div>
            <div className="text-2xl font-bold text-gray-400">LOGO 2</div>
            <div className="text-2xl font-bold text-gray-400">LOGO 3</div>
            <div className="text-2xl font-bold text-gray-400">LOGO 4</div>
          </div>
        </div>
      </div>
    </section>
  );
}
