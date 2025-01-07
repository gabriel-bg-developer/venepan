import Image from 'next/image';
import Link from 'next/link';
import AboutUsLine from './decorative-lines/AboutUsLine';
import TraditionLine from './decorative-lines/TraditionLine';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Left side - Image */}
          <div className="relative aspect-square">
            <Image
              src="/images/baker.jpeg"
              alt="Venepan Historia"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="relative w-full">
              <h2 className="text-4xl font-bold">QUIÉNES SOMOS</h2>
              {/* <AboutUsLine /> */}
            </div>
            
            <p className="text-lg italic text-gray-700">
              Nuestra Historia: Más de 50 años llevando salud y sabor a tu mesa.
            </p>
            <p className="text-gray-600">
              Somos una asociación comprometida con la fabricación de alimentos saludables, 
              con raíces que se remontan a la década de los 70 en el Instituto Vocacional 
              de Venezuela. Con un legado de calidad e innovación, seguimos llevando el 
              mensaje de la reforma pro-salud a través de productos naturales y deliciosos, 
              elaborados con los más altos estándares de tecnología y ética.
            </p>
            <Link 
              href="/nosotros"
              className="inline-block bg-black text-white border-4 border-black px-6 py-2 
                hover:bg-white hover:text-black transition-colors duration-300"
            >
              CONOCE NUESTRA MISIÓN Y VISIÓN
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative w-full">
              <h3 className="text-2xl font-bold uppercase">
                VENEPAN: MÁS QUE PAN, UNA TRADICIÓN DE BIENESTAR
              </h3>
              {/* <TraditionLine /> */}
            </div>
            
            <p className="text-gray-600">
              Nuestros productos no solo son alimentos; son el resultado de décadas 
              de compromiso con la salud y el sabor. Estamos orgullosos de ofrecer 
              panes integrales y alimentos saludables que han sido parte de la vida 
              de miles de familias venezolanas.
            </p>
            <p className="text-gray-600">
              Encuentra nuestros productos en puntos de venta autorizados y lleva a 
              tu hogar la calidad y la tradición que nos distingue.
            </p>

            <div className="space-y-4">
              <h4 className="font-bold uppercase">NUESTROS COMPROMISOS:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Ingredientes 100% naturales</li>
                <li>Opciones nutritivas y deliciosas</li>
                <li>Calidad garantizada desde 1970</li>
              </ul>
            </div>

            <Link 
              href="/contactanos"
               className="inline-block bg-black text-white border-4 border-black px-6 py-2 
                hover:bg-white hover:text-black transition-colors duration-300"
            >
              ENCUÉNTRANOS
            </Link>
          </div>

          {/* Right side image */}
          <div className="relative aspect-square">
            <Image
              src="/images/panen70s.jpeg" 
              alt="Venepan Compromiso"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
