import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';

const PoliticaDePrivacidadPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidad | Psicopiloto</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container prose">
          <h1>Política de Privacidad</h1>
          <p>
            De conformidad con lo establecido en la normativa vigente en Protección de Datos de Carácter Personal, se le informa de que sus datos serán tratados por el titular del sitio web con el fin de gestionar su consulta y el envío de comunicaciones.
          </p>
          <h2>Tratamiento de sus datos</h2>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento del interesado. Los datos se conservarán el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados.
          </p>
          <h2>Derechos del usuario</h2>
          <p>
            Usted tiene derecho a acceder, rectificar, suprimir, oponerse, limitar el tratamiento y a la portabilidad de sus datos. Puede ejercer estos derechos enviando un correo a info@psicopiloto.com.
          </p>
        </div>
      </main>
      <WhatsAppFloatButton phone="+34676230537" />
      <Footer />
    </>
  );
};

export default PoliticaDePrivacidadPage;

