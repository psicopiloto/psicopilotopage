import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Servicios | Psicopiloto</title>
        <meta name="description" content="Servicios de psicología y consultoría empresarial para gestionar el estrés, mejorar el liderazgo y la toma de decisiones.">
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Encuentra el Camino hacia tu Mejor Versión.</h1>
          <p className="mt-4 text-lg text-gray-600">Psicopiloto: Soluciones Psicológicas para Personas y Empresas.</p>

          <section id="personas" className="mt-12 md:mt-20 py-12 md:py-20 bg-gray-100 rounded-xl shadow-lg">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Te Acompaño en tu Vuelo Personal.</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-lg text-gray-700 md:text-left">
                  <p>Como psicólogo, mi misión es proporcionarte las herramientas para que te sientas seguro y con el control de tu vida. Mi enfoque integrador me permite combinar diferentes técnicas, incluyendo la **terapia EMDR**, para tratar problemas como:</p>
                  <ul className="mt-4 list-disc list-inside text-left space-y-2">
                    <li>Ansiedad y estrés.</li>
                    <li>Gestión emocional y dependencia emocional.</li>
                    <li>Duelo.</li>
                    <li>Relaciones de pareja y autoestima.</li>
                    <li>Experiencias traumáticas.</li>
                  </ul>
                  <div className="mt-8 text-center md:text-left">
                    <Link href="/contacto">
                      <a className="cta-button cta-primary">Agenda tu Primera Sesión</a>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image src="/images/personal-growth.webp" alt="Una persona serena mirando al horizonte." width={600} height={400} layout="responsive" loading="lazy" className="rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </section>

          <section id="empresas" className="mt-12 md:mt-20 py-12 md:py-20 bg-white rounded-xl shadow-lg">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Optimiza tu Tripulación y Potencia tus Resultados.</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image src="/images/corporate-team.webp" alt="Un equipo de personas trabajando en armonía." width={600} height={400} layout="responsive" loading="lazy" className="rounded-xl shadow-lg" />
                </div>
                <div className="text-lg text-gray-700 md:text-left">
                  <p>Aplico la psicología de alto rendimiento de la aviación para fortalecer a tu equipo. Te ayudo a:</p>
                  <ul className="mt-4 list-disc list-inside text-left space-y-2">
                    <li>**Mejorar la Comunicación y el Liderazgo:** Basado en el **Crew Resource Management (CRM)**.</li>
                    <li>**Gestión de Amenazas y Errores:** Implementando metodologías como **EBT** y **CBTA**.</li>
                    <li>**Toma de Decisiones bajo Presión:** Entrenando a tus líderes para actuar con asertividad y eficacia.</li>
                  </ul>
                  <div className="mt-8 text-center md:text-left">
                    <Link href="/contacto">
                      <a className="cta-button cta-primary">Solicita un Diagnóstico para tu Empresa</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default ServicesPage;
