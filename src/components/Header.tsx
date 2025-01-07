import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/venepan-small-logo.png" 
              alt="Venepan" 
              width={120} 
              height={30}
              className="h-auto"
              priority
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="nav-link">
              Inicio
            </Link>
            <Link href="/productos" className="nav-link">
              Productos
            </Link>
            <Link href="/nosotros" className="nav-link">
              Nosotros
            </Link>
            <Link 
              href="/contactanos" 
              className="nav-link-button"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            aria-label="Toggle menu"
            title="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header; 