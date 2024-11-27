import { ChangeEvent, FormEvent, useState } from "react";
import styles from '../../style.module.css';
import { useApiContext } from "../../APIContext/PageContext";

function Login() {
    const { redirectTo, setUsuario } = useApiContext();
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            console.log("Tentando fazer login com:", { nickname, senha: password });
            const response = await fetch("http://localhost:8080/usuario/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nickname: nickname,
                    senha: password,
                }),
            });

            if (response.ok) {
                const usuarioAutenticado = await response.json(); // Recebe o usuário autenticado
                console.log("Usuário logado com sucesso:", usuarioAutenticado);

                // Define o usuário no contexto
                setUsuario(usuarioAutenticado); // Armazena o usuário no contexto

                redirectTo("/Perfil"); // Redireciona após o login
            } else {
                alert("Nickname ou senha incorretos. Tente novamente.");
            }
        } catch (error) {
            alert("Ocorreu um erro. Tente novamente.");
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (nickname === '' || password === '') {
            alert('Cadastro incompleto');
            redirectTo("/Login");
        } else {
            handleLogin(); // Chama a função de login
        }
    };

    function handleNickname(event: ChangeEvent<HTMLInputElement>) {
        setNickname(event.target.value); // Atualiza o estado do nickname
    };

    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value); // Atualiza o estado da senha
    }

    return (
        <>
            <div className={styles.telaDeValidacao}>
                <div className={styles.logar}>
                    <h1 className={styles.tituloDeValidacao}>Entrar na conta</h1>
                    <form onSubmit={handleSubmit} className={styles.formDeValidacao}>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="nickname">Nickname:</label>
                            <input
                                className={styles.campoDeValidacao}
                                onChange={handleNickname}
                                required
                            />
                        </div>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="password">Senha:</label>
                            <input
                                className={styles.campoDeValidacao}
                                type="password"
                                onChange={handlePassword}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.botaoDeLogar}>
                            Entrar
                        </button>
                        <button
                            className={styles.botaoDeCriarUmaNovaConta}
                            onClick={() => { redirectTo("/Singin") }}>
                            Criar uma nova conta
                        </button>
                    </form>
                </div>
                <h1 className={styles.intro}>Bem-vindo de volta!</h1>
            </div>
        </>
    );
}

export default Login;