import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Image
              src="/images/venepan-small-logo.png"
              alt="Venepan Logo"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400">
              Elaborando el mejor pan venezolano con amor y tradición.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-gray-400 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@venepan.com</li>
              <li>Dirección: Calle Principal #123</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 7:00 AM - 7:00 PM</li>
              <li>Sábados: 7:00 AM - 3:00 PM</li>
              <li>Domingos: 7:00 AM - 1:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Venepan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
