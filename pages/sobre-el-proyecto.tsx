import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

const AboutProjectPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sobre el Proyecto | Psicopiloto</title>
        <meta name="description" content="La historia detrás de Psicopiloto. Descubre cómo la experiencia de un piloto militar se fusiona con la psicología para tu bienestar." />
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">La Fusión de Dos Mundos para un Mismo Propósito: Tu Bienestar.</h1>
          <p className="mt-4 text-lg text-center text-gray-600">
            De la Cabina de Vuelo a la Sesión Terapéutica: El Nacimiento de una Metodología Única.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="/images/psicopiloto-collage.webp" alt="Collage que fusiona la imagen de un avión con la de un mapa de vuelo y una silueta humana." width={600} height={400} layout="responsive" loading="lazy" className="rounded-xl shadow-lg" />
            </div>

            <div className="text-lg text-gray-700">
              <p>
                El proyecto Psicopiloto nace de mi propia trayectoria, una que me ha llevado desde las alturas del espacio aéreo, pilotando aeronaves del Ejército del Aire, hasta el profundo mundo de la psicología humana. Durante mis **18 años como piloto militar**, no solo acumulé **más de 2500 horas de vuelo** o fui **Jefe de la Sección de CRM**, sino que aprendí que la seguridad y el éxito dependen de factores tan humanos como la **comunicación, la asertividad, el liderazgo y la humildad**.
              </p>
              <p className="mt-4">
                Estos aprendizajes, sumados a mi formación como psicólogo y mis especializaciones en **psicopatología integradora** y **terapia EMDR**, me permiten ofrecer un enfoque que va más allá de lo convencional. No se trata solo de hablar, sino de encontrar la causa raíz de las turbulencias emocionales y de trazar un plan de vuelo claro para superarlas.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/servicios">
              <a className="cta-button cta-primary">Descubre mis Servicios</a>
            </Link>
          </div>
        </div>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default AboutProjectPage;
