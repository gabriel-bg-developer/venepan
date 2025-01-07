import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import AboutUs from '@/components/AboutUs';
import BrandFeatures from '@/components/BrandFeatures';
import Distribute from '@/components/Distribute';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="px-6 md:px-12 lg:px-36">
        <Products />
        <AboutUs />
        <BrandFeatures />
        <Distribute />
        <ContactForm />
      </div>
      <Footer />  
    </>
  );
}