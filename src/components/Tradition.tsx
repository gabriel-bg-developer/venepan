import Image from 'next/image';
import Link from 'next/link';
import TraditionLine from './decorative-lines/TraditionLine';

const Tradition = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="relative w-full">
              <h2 className="text-3xl font-bold uppercase">
                Venepan: Más que pan, una tradición de bienestar
              </h2>
              {/* <TraditionLine /> */}
            </div>

            <p className="text-gray-700">
              Nuestros productos no solo son alimentos; son el resultado de décadas 
              de compromiso con la salud y el sabor. Estamos orgullosos de ofrecer 
              panes integrales y alimentos saludables que han sido parte de la vida 
              de miles de familias venezolanas.
            </p>

            <p className="text-gray-700">
              Encuentra nuestros productos en puntos de venta autorizados y lleva a 
              tu hogar la calidad y la tradición que nos distingue.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">NUESTROS COMPROMISOS:</h3>
              <ul className="space-y-2">
                <li>• Ingredientes 100% naturales</li>
                <li>• Opciones nutritivas y deliciosas</li>
                <li>• Calidad garantizada desde 1970</li>
              </ul>
            </div>

            <Link 
              href="#" 
              className="inline-block px-8 py-3 bg-white text-black border-2 border-black 
                         hover:bg-black hover:text-white transition-colors duration-300"
            >
              ENCUÉNTRANOS
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative aspect-square">
            <Image
              src="/images/repartidor.jpg"
              alt="Tradición Venepan"
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

export default Tradition;
