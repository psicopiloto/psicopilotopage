import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

const PoliticaDeCookiesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Política de Cookies | Psicopiloto</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container prose">
          <h1>Política de Cookies</h1>
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario y realizar análisis de uso. Una cookie es un pequeño archivo de texto que se almacena en su navegador.
          </p>
          <h2>Tipos de cookies</h2>
          <ul>
            <li>**Cookies técnicas:** Necesarias para el funcionamiento del sitio web.</li>
            <li>**Cookies de análisis:** Permiten medir la audiencia y el tráfico de la web.</li>
          </ul>
          <h2>Gestión de cookies</h2>
          <p>
            Usted puede configurar su navegador para que no acepte cookies, pero es posible que algunas funcionalidades del sitio web no funcionen correctamente.
          </p>
        </div>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default PoliticaDeCookiesPage;
