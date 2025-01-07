import Image from 'next/image';
import Link from 'next/link';
import DistributeLine from './decorative-lines/DistributeLine';

const Distribute = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative aspect-square">
            <Image
              src="/images/invierteConNosotros2.jpeg" // Replace with actual image later
              alt="Distribuir productos Venepan"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="relative w-full">
              <h2 className="text-3xl font-bold">¿QUIERES DISTRIBUIR NUESTROS PRODUCTOS?</h2>
              {/* <DistributeLine /> */}
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                En Venepan, nuestra misión es llevar alimentos saludables y de calidad a 
                cada rincón de Venezuela y más allá.
              </p>
              <p className="text-gray-700">
                Si compartes nuestra visión y deseas ofrecer a tus clientes productos 
                que combinan tradición, nutrición y sabor, te invitamos a unirte a 
                nuestra red de distribuidores.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">¿QUÉ TE OFRECEMOS?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-[#DEB887] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Productos reconocidos</span>
                    {" con más de 50 años en el mercado."}
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-[#DEB887] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Apoyo logístico</span>
                    {" y materiales promocionales para impulsar tus ventas."}
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-6 h-6 text-[#DEB887] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Calidad garantizada,</span>
                    {" respaldada por nuestra experiencia y compromiso con la salud."}
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">¿CÓMO EMPEZAR?</h3>
              <p className="text-gray-700">
                Descubre nuestras condiciones para convertirte en proveedor 
                autorizado y hablemos sobre cómo llevar juntos el bienestar a más familias.
              </p>
            </div>

            <Link 
              href="/contactanos"
               className="inline-block bg-black text-white border-4 border-black px-6 py-2 
                hover:bg-white hover:text-black transition-colors duration-300"
            >
              CONVIÉRTETE EN DISTRIBUIDOR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribute;
