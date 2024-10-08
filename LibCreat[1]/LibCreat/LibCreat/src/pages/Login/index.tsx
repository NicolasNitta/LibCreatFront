import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (name == '') {
            alert('Cadastro incompleto');
            navigate('/login')
        } else
            if (email == '') {
                alert('Cadastro incompleto');

                navigate('/login')
            } else
                if (password == '') {
                    alert('Cadastro incompleto');

                    navigate('/login')
                } else
                    navigate('/');
    };

    function handleName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    };

    function handleEmail(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value);
    }

    function handlePassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="absolute -bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-800/100 to bg-slate-800/0 pointer-events-none rounded-lg"></div>
            <div className="absolute bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

                <h2 className="text-2xl font-bold mb-4">Crie uma conta</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Nome
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleName} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            E-mail
                        </label>
                        <input
                           
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Senha
                        </label>
                        <input

                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handlePassword}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline "

                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    Já possuo uma conta?{" "}
                    <a href="#" className="underline">
                        Entrar
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;