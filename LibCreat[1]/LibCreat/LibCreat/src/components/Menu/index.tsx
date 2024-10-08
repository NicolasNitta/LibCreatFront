import { Link } from "react-router-dom";



function Menu() {
    return (
        <header className="bg-gray-100 py-2">
        <nav className="flex flex-col  pt-4">
            <ul className="flex justify-center pb-2">
                <li className="mr-4">
                    <button className="bg-gray-100 hover:bg-slate-200 hover:scale-110 text-gray-400 hover:text-slate-900 py-1 px-3 rounded border-none">
                        <Link to="/" className="text-gray-400 hover:text-slate-900">Perfil</Link>
                    </button>
                </li>
                <li className="mr-4">
                    <button className="bg-gray-100 hover:bg-slate-200 hover:scale-110 text-gray-400 hover:text-slate-900 py-1 px-3 border-none rounded">
                        <Link to="/ForYou" className="text-gray-400 hover:text-slate-900">ForYou</Link>
                    </button>
                </li>
                <li>
                    <button className="bg-gray-100 hover:bg-slate-200 hover:scale-110 text-gray-400hover:text-slate-900 py-1 px-3 border-none rounded">
                        <Link to="/Login" className="text-gray-400 hover:text-slate-900">Login</Link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>

           
    )
}

export default Menu;