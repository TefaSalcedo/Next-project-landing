export const metadata = {
  title: 'Landing Next App',
  description: 'Una landing moderna hecha con Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        <header className="w-full py-4 px-6 border-b">
          <nav className="flex justify-between">
            <span className="font-bold text-lg">MiLogo</span>
            <div className="space-x-4">
              <a href="#inicio" className="hover:underline">Inicio</a>
              <a href="#contacto" className="hover:underline">Contacto</a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="w-full text-center py-6 border-t mt-20 text-sm">
          © {new Date().getFullYear()} Mi Landing. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
