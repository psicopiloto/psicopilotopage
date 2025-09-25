import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container flex flex-col items-center text-center">
        {/* Logo y Email */}
        <div className="flex flex-col items-center space-y-2 mb-4">
          <Image src="/logo.webp" alt="Psicopiloto Logo" width={60} height={60} />
          <p className="text-gray-400">info@psicopiloto.com</p>
        </div>
        
        {/* Enlaces de redes sociales */}
        <ul className="flex space-x-6 mb-8">
          <li>
            <a href="https://www.linkedin.com/in/jose-carlos-rodríguez-retamar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.762s.784-1.762 1.75-1.762 1.75.79 1.75 1.762-.784 1.762-1.75 1.762zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/psicopi_loto" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c2.716 0 3.056.01 4.122.06c1.07.05 1.636.216 2.022.378.43.17.76.438 1.096.774s.604.666.774 1.096c.162.386.328.952.378 2.022.05 1.066.06 1.406.06 4.122s-.01 3.056-.06 4.122c-.05 1.07-.216 1.636-.378 2.022-.17.43-.438.76-.774 1.096s-.666.604-1.096.774c-.386.162-.952.328-2.022.378-1.066.05-1.406.06-4.122.06s-3.056-.01-4.122-.06c-1.07-.05-1.636-.216-2.022-.378-.43-.17-.76-.438-1.096-.774s-.604-.666-.774-1.096c-.162-.386-.328-.952-.378-2.022-.05-1.066-.06-1.406-.06-4.122s.01-3.056.06-4.122c.05-1.07.216-1.636.378-2.022.17-.43.438-.76.774-1.096s.666-.604 1.096-.774c.386-.162.952-.328 2.022-.378s1.406-.06 4.122-.06zm0 2c-2.434 0-2.738.01-3.714.056-1.036.046-1.41.206-1.688.318-.328.13-.59.294-.782.486-.19.192-.356.454-.486.782-.11.278-.27.652-.318 1.688-.046.976-.056 1.28-.056 3.714s.01 2.738.056 3.714c.046 1.036.206 1.41.318 1.688.13.328.294.59.486.782.192.19.454.356.782.486.278.11.652.27 1.688.318.976.046 1.28.056 3.714.056s2.738-.01 3.714-.056c1.036-.046 1.41-.206 1.688-.318.328-.13.59-.294.782-.486.19-.192.356-.454.486-.782.11-.278.27-.652.318-1.688.046-.976.056-1.28.056-3.714s-.01-2.738-.056-3.714c-.046-1.036-.206-1.41-.318-1.688-.13-.328-.294-.59-.486-.782-.192-.19-.454-.356-.782-.486-.278-.11-.652-.27-1.688-.318-.976-.046-1.28-.056-3.714-.056zm0 3.75c-2.357 0-4.25 1.893-4.25 4.25s1.893 4.25 4.25 4.25 4.25-1.893 4.25-4.25-1.893-4.25-4.25-4.25zm0 2.75c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6.5-7.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/>
              </svg>
            </a>
          </li>
        </ul>
        
        {/* Enlaces legales */}
        <div className="mt-8 text-sm">
          <Link href="/aviso-legal"><a className="text-gray-400 hover:text-white">Aviso Legal</a></Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/politica-de-cookies"><a className="text-gray-400 hover:text-white">Política de Cookies</a></Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/politica-de-privacidad"><a className="text-gray-400 hover:text-white">Política de Privacidad</a></Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} Psicopiloto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

