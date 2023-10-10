import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 w-full h-16 bg-white flex">
            <div className="flex items-center justify-between w-full px-5 text-brown-default">
                <div className="text-2xl font-bold text-left">
                    Lucas Aquino
                </div>
                <div className="ml-auto flex space-x-4">
                    <Link href="/">
                        <p className="bg-transparent border-none text-base cursor-pointer transition-colors font-bold relative hover:text-black">Início</p>
                    </Link>
                    <Link href="/quemSomos">
                        <p className="bg-transparent border-none text-base cursor-pointer transition-colors font-bold relative hover:text-black">Quem somos</p>
                    </Link>
                    <a href="#" className="bg-transparent border-none text-base cursor-pointer transition-colors font-bold relative hover:text-black">Clientes</a>
                    <Link href="/faleConosco">
                        <p className="bg-transparent border-none text-base cursor-pointer transition-colors font-bold relative hover:text-black">Fale conosco</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}
