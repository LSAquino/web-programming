import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="bg-white mb-8">
      <Navbar />
      <div className="mt-16 bg-white">
        <div className="flex justify-center items-center text-white font-bold h-16 bg-dark-brown text-4xl">
          <h1>Quem Somos</h1>
        </div>
        <div className="bg-light-gray p-12">
          <div>
            <section className="text-base bg-white rounded-lg shadow-md p-6 bg-white border-t-4 border-brown-default text-dark-brown">
              <div>
                <h1 className="text-2xl mb-4" >Quem Somos</h1>
                <p className="text-base leading-6">
                  A "Lucas Aquino" é uma empresa de desenvolvimento de software apaixonada por transformar ideias em soluções digitais excepcionais. Fundada em 2019, temos um compromisso sólido com a inovação e a excelência em nossos serviços.

                  Nossa equipe é formada por profissionais altamente qualificados nas áreas de desenvolvimento de software e design. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades específicas e oferecer soluções personalizadas que impulsionam seus negócios.

                  Desde nossa fundação, atendemos a uma variedade de clientes em diferentes setores, ajudando-os a alcançar sucesso digital.
                </p>

                <p className="text-base leading-6">Entre nossos valores estão:</p>

                <ul className="list-disc ml-6">
                  <li className="mb-2"><strong>Comprometimento:</strong> Nosso compromisso com a excelência reflete-se em cada projeto que entregamos.</li>
                  <li className="mb-2"><strong>Respeito aos Clientes:</strong> Valorizamos profundamente nossos clientes e suas visões, trabalhando em parceria para alcançar resultados excepcionais.</li>
                  <li className="mb-2"><strong>Preço Justo:</strong> Oferecemos soluções de alta qualidade a preços justos, garantindo um excelente custo-benefício.</li>
                  <li className="mb-2"><strong>Agilidade:</strong> Nossa capacidade de resposta rápida assegura que os projetos sejam entregues no prazo e dentro do orçamento.</li>
                  <li className="mb-2"><strong>Ética:</strong> A ética é fundamental para nós. Conduzimos nossos negócios com integridade, transparência e responsabilidade.</li>
                </ul>

                <p className="text-base leading-6">Estes valores, entre outros, definem quem somos e o que entregamos. Com uma equipe dedicada e apaixonada pela inovação, estamos comprometidos em continuar liderando o mercado, fornecendo soluções digitais excepcionais que impulsionam o sucesso dos nossos clientes.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer className="mt-8"/>
    </div>
  )
}
