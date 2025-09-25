import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';
import Link from 'next/link';

const AboutMePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sobre Mí | José Carlos Rodríguez Retamar</title>
        <meta name="description" content="Conoce a José Carlos Rodríguez Retamar, piloto y psicólogo. Descubre su trayectoria y por qué es el experto ideal para tu bienestar." />
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">José Carlos Rodríguez Retamar: Piloto. Psicólogo. Psicopiloto.</h1>
          
          <div className="mt-12 flex flex-col items-center text-center md:flex-row md:text-left md:space-x-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <Image src="/images/profile-pic.webp" alt="Foto de perfil de José Carlos Rodríguez Retamar." width={256} height={256} layout="responsive" className="object-cover" />
            </div>
            
            <div className="mt-8 md:mt-0 text-lg text-gray-700">
              <h2 className="text-2xl font-bold">Mi experiencia personal al servicio de tu bienestar.</h2>
              <p className="mt-4">
                Mi camino comenzó en el cielo. Como Capitán del Ejército del Aire, volé aviones de extinción de incendios durante casi dos décadas. Mi formación y mi experiencia práctica en la cabina me enseñaron que la disciplina, la seguridad y la gestión de los factores humanos son claves para alcanzar los objetivos.
              </p>
              <p className="mt-4">
                Paralelamente, me formé como psicólogo, culminando con mi **Licenciatura en Psicología por la Universidad de Granada**, la **Habilitación de Psicólogo General Sanitario** y mi especialización como **Experto en Psicología Aeronáutica**. En la actualidad, continuo mi formación en psicopatología integradora y EMDR para ofrecerte las herramientas más eficaces.
              </p>
              <div className="mt-8">
                <a href="https://www.linkedin.com/in/jose-carlos-rodríguez-retamar" target="_blank" rel="noopener noreferrer" className="cta-button cta-primary">Conecta conmigo en LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default AboutMePage
