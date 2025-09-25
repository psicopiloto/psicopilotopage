import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Psicopiloto | Navega hacia tu Bienestar</title>
        <meta name="description" content="Psicólogo experto en CRM, liderazgo y gestión de crisis. Asesoramiento para personas y empresas. Transforma tu vida y tu negocio." />
      </Head>
      <Nav />
      <main>
        <section className="py-20 text-center bg-white">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Psicopiloto: Navega hacia tu Bienestar. <br /> Liderazgo, Humildad y Asertividad aplicados a tu vida.
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600">
              "No solo te acompaño a tierra firme, te enseño a volar."
            </p>
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0">
              <Link href="/servicios#personas">
                <a className="cta-button cta-primary shadow-lg">Inicia tu Vuelo Personal</a>
              </Link>
              <Link href="/servicios#empresas">
                <a className="cta-button cta-secondary shadow-lg">Despega hacia el Éxito Corporativo</a>
              </Link>
            </div>
            <div className="mt-12">
              <Image src="/images/cockpit-horizon.webp" alt="Cockpit de avión con un horizonte de fondo, simbolizando el control." width={900} height={500} layout="responsive" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold">Toma el Control de tu Vuelo Personal</h2>
              <p className="mt-4 text-lg text-gray-600">
                ¿Sientes que el rumbo de tu vida está fuera de control? Te ofrezco herramientas para gestionar la ansiedad, el estrés y el duelo, basándome en una metodología probada que te dará seguridad y confianza.
              </p>
              <div className="mt-6">
                <Link href="/servicios#personas">
                  <a className="cta-button cta-primary">Inicia tu Vuelo Personal</a>
                </Link>
              </div>
            </div>
            <div>
              <Image src="/images/calm-person.webp" alt="Una persona serena mirando al horizonte, simbolizando el control personal." width={500} height={350} layout="responsive" loading="lazy" className="rounded-xl shadow-lg" />
            </div>
            
            <div className="mt-12 md:mt-0 text-center md:text-left">
              <h2 className="text-4xl font-bold">Eleva el Potencial de tu Tripulación</h2>
              <p className="mt-4 text-lg text-gray-600">
                La seguridad en la cabina de vuelo se basa en la comunicación, el liderazgo y la gestión de factores humanos. Aplica estas habilidades de alto rendimiento a tu equipo para optimizar la toma de decisiones y fortalecer la cohesión.
              </p>
              <div className="mt-6">
                <Link href="/servicios#empresas">
                  <a className="cta-button cta-primary">Despega hacia el Éxito Corporativo</a>
                </Link>
              </div>
            </div>
            <div>
              <Image src="/images/teamwork.webp" alt="Engranajes encajando, simbolizando un equipo de trabajo cohesivo." width={500} height={350} layout="responsive" loading="lazy" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default HomePage;
