import Image from 'next/image';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Pan Integral',
      image: '/images/panIntegral2.png', // You can replace this with actual image path later
      alt: 'Pan Integral Venepan'
    },
    {
      id: 2,
      name: 'Pan de Salvado con Miel',
      image: '/images/panConMiel.png', // You can replace this with actual image path later
      alt: 'Pan de Salvado con Miel Venepan'
    },
    {
      id: 3,
      name: 'Cereales ',
      image: '/images/cerealDeChocolate.png', // You can replace this with actual image path later
      alt: 'Cereales Venepan'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nuestros Productos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Desde panes tradicionales hasta cereales saludables, tenemos opciones pensadas para cuidar de ti y tu familia.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
