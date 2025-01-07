import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/banner2.png)',
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-[#DEB887] bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-5xl">
          <h1 className="font-made-future font-bold text-4xl md:text-5xl mb-12 leading-tight text-black tracking-widest uppercase">
            Alimentamos tu bienestar
            <br />
            con tradición y salud desde
            <br />
            el corazón de Venezuela
          </h1>
          
          <Link 
            href="/nosotros"
            className="inline-block bg-black font-bold text-white px-12 py-4 text-xl font-made-future  transition-colors tracking-wider uppercase group relative"
          >
            Conócenos
            <span className="absolute transform translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 inline-block ml-2">
              &gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;