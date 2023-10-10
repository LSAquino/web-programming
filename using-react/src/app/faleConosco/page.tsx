import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar className="z-10"/>
            <div className="mt-16">
                <div className="flex justify-center items-center text-white font-bold h-16 bg-dark-brown text-4xl">
                    <h1>Contato</h1>
                </div>
                <div className="bg-light-gray p-12">
                    <div>
                        <section className="text-base bg-white rounded-lg shadow-md p-6 bg-white border-t-4 border-brown-default text-dark-brown">
                            <div>
                                <img className='w-full' src="/images/post_thumbnail-4db49125723aa55604cfc7ef3eb4013c.jpg" alt="" />
                                <p className="content leading-6">
                                    Perguntas? Comentários? Entre em Contato:
                                </p>
                                <ul className="ml-4">
                                    <li className="mb-2"><strong>WhatsApp:</strong> (31) 99764-7549</li>
                                    <li className="mb-2"><strong>Email:</strong> ls2aquino10@gmail.com</li>
                                    <li className="mb-2"><strong>Github:</strong> <a href="https://github.com/LSAquino">https://github.com/LSAquino</a></li>
                                </ul>
                                <p className="content leading-6">Ou entre em contato conosco através do formulário: </p>
                            </div>
                            <form id="contact-form">
                                <div className="form-group mb-4">
                                    <label htmlFor="nome" className="block font-bold text-dark-brown mb-1">Nome completo:</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        required
                                        className="w-full p-2 border border-brown-default rounded-md text-base text-dark-brown"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="telefone" className="block font-bold text-dark-brown mb-1">Telefone:</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        required
                                        className="w-full p-2 border border-brown-default rounded-md text-base text-dark-brown"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="block font-bold text-dark-brown mb-1">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full p-2 border border-brown-default rounded-md text-base text-dark-brown"
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="mensagem" className="block font-bold text-dark-brown mb-1">Mensagem:</label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        rows="4"
                                        required
                                        className="w-full p-2 border border-brown-default rounded-md text-base text-dark-brown"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="enviar-button bg-brown-default text-white border-none py-2 px-4 rounded-md font-bold text-base hover:bg-gray-600 transition duration-300 mt-4"
                                >
                                    Enviar
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
