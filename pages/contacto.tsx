import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';
import { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar el formulario a un servicio como Formspree o un backend propio
    alert('Formulario enviado. ¡Gracias por contactarnos!');
  };

  return (
    <>
      <Head>
        <title>Contacto | Psicopiloto</title>
        <meta name="description" content="Contacta con José Carlos Rodríguez Retamar para agendar una cita o solicitar información sobre los servicios de Psicopiloto." />
      </Head>
      <Nav />
      <main className="py-12 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Tu Próxima Etapa Comienza Aquí.</h1>
          <p className="mt-4 text-lg text-gray-600">Contáctame para despejar tus dudas y trazar tu nuevo rumbo.</p>

          <div className="mt-12 flex flex-col md:flex-row md:justify-center md:space-x-12">
            
            <div className="bg-white p-8 rounded-xl shadow-lg md:w-1/2">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required className="p-3 border rounded-md" />
                <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required className="p-3 border rounded-md" />
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} className="p-3 border rounded-md" />
                <select name="type" onChange={handleChange} required className="p-3 border rounded-md">
                  <option value="">Tipo de Consulta</option>
                  <option value="personal">Personal</option>
                  <option value="empresarial">Empresarial</option>
                  <option value="other">Otra</option>
                </select>
                <textarea name="message" placeholder="Mensaje" onChange={handleChange} required className="p-3 border rounded-md h-32"></textarea>
                <button type="submit" className="cta-button cta-primary">
                  Enviar Consulta
                </button>
              </form>
            </div>
            
            <div className="mt-12 md:mt-0 md:w-1/3 text-lg text-gray-700">
              <h3 className="text-2xl font-bold">Otras Formas de Contacto</h3>
              <p className="mt-4">
                Si prefieres una comunicación más directa, puedes contactarme por:
              </p>
              <ul className="mt-4 space-y-2">
                <li><a href="tel:+34676230537" className="hover:underline">Teléfono: +34 676 23 05 37</a></li>
                <li><a href="mailto:info@psicopiloto.com" className="hover:underline">Correo Electrónico: info@psicopiloto.com</a></li>
              </ul>
              <div className="mt-8">
                <a href="https://wa.me/34676230537?text=Hola,%20me%20gustaría%20más%20información%20sobre%20tus%20servicios." target="_blank" rel="noopener noreferrer" className="cta-button cta-secondary">
                  Enviar WhatsApp
                </a>
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

export default ContactPage;


