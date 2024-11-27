import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from '../../style.module.css';
import { useApiContext } from "../../APIContext/PageContext";

function SingIn() {
    const { redirectTo } = useApiContext();
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const singin = async (data: { nickname: any; email: any; nome: any; descricao: any; seguidores: any; senha: any; }) => {
        try {
            const response = await fetch("http://localhost:8080/usuario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nickname: data.nickname,
                    email: data.email,
                    nome: data.nome,
                    descricao: data.descricao,
                    seguidores: 0,
                    senha: data.senha,
                }),
            });

            if (response.ok) {
                redirectTo("/Perfil");
            }

        } catch (error) {
            console.error("Erro ao adicionar usuário:", error);
        }
    };

    const onSubmit = (data: any) => {
        singin(data);
    };

    return (
        <>
            <div className={styles.telaDeValidacao}>
                <h1 className={styles.intro}>Seja bem-vindo!</h1>
                <div className={styles.cadastrar}>
                    <h1 className={styles.tituloDeValidacao}>Criar uma nova conta</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.formDeValidacao}>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="nickname">Nickname:</label>
                            <input
                                className={styles.campoDeValidacao}
                                {...register("nickname", { required: "Nickname é obrigatório" })}
                            />
                        </div>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="nome">Nome:</label>
                            <input
                                className={styles.campoDeValidacao}
                                {...register("nome", { required: "Nome é obrigatório" })}
                            />
                        </div>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                className={styles.campoDeValidacao}
                                {...register("email", { required: "E-mail é obrigatório" })}
                            />
                        </div>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="descricao">Descrição:</label>
                            <input
                                className={styles.campoDeValidacao}
                                {...register("descricao")}
                            />
                        </div>
                        <div className={styles.areaDeValidacao}>
                            <label htmlFor="senha">Senha:</label>
                            <input
                                className={styles.campoDeValidacao}
                                type="password"
                                {...register("senha", { required: "Senha é obrigatória" })}
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.botaoDeCadastrar}>
                            Cadastrar
                        </button>
                        <button
                            className={styles.botaoDeJaTenhoUmaConta}
                            onClick={() => { redirectTo("/Login") }}>
                            Já tenho uma conta
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SingIn;