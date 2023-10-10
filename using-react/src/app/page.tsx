import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="mt-16 w-full bg-white">
            <div>
                <img className="w-full" src="/images/post_thumbnail-223df17fc04f8b6cf3bfacb9d2072dc8.jpeg" alt="dev image" />
                <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md mt-4">
                    <div className="flex p-4">
                        <div className="flex-1 p-4 text-left">
                            <h1 className="text-2xl mb-4 text-dark-brown">Sobre</h1>
                            <p className="text-base leading-6 text-dark-brown">
                                Somos uma empresa de desenvolvimento de software apaixonada por transformar ideias em soluções digitais excepcionais. Com uma equipe de talentosos engenheiros e designers, estamos comprometidos em criar software inovador que atenda às necessidades específicas de nossos clientes.
                            </p>
                        </div>
                        <div className="flex-1 p-4 bg-dark-brown rounded-lg text-white text-center">
                            <p className="text-sm mb-2">(31) 99764-7549</p>
                            <p className="text-sm mb-2">ls2aquino10@gmail.com</p>
                            <p className="text-sm mb-4">Av. Atlântica, Copacabana, Rio de Janeiro/RJ</p>
                            <button className="bg-white text-gray-800 border-none px-4 py-2 text-base rounded-md cursor-pointer transition-colors duration-300 hover:text-black">Saiba mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}
