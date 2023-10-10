export default function Footer() {
    return (
        <div className="bg-dark-brown text-white py-5 text-center">
            <div>
                <p>&copy; 2023 Lucas Aquino. Todos os direitos reservados.</p>
                <ul className="flex justify-center space-x-10 list-none">
                    <li>
                        <a href="#" className="text-white text-decoration-none hover:underline">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-decoration-none hover:underline">Termos de Serviço</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
