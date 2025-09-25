import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

const AvisoLegalPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Aviso Legal | Psicopiloto</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container prose">
          <h1>Aviso Legal</h1>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, a continuación se exponen los datos identificativos del titular.
          </p>
          <h2>Datos del Titular</h2>
          <ul>
            <li>**Nombre del Titular:** José Carlos Rodríguez Retamar</li>
            <li>**Domicilio Social:** [Incluir dirección aquí]</li>
            <li>**Correo Electrónico:** info@psicopiloto.com</li>
            <li>**Teléfono:** +34 676 23 05 37</li>
          </ul>
          <h2>Propiedad Intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual e industrial del portal web y de sus contenidos son propiedad del titular o de terceros.
          </p>
        </div>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default AvisoLegalPage;
