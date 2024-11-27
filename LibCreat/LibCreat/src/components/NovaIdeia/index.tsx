import styles from "../../style.module.css";
import { useApiContext } from "../../APIContext/PageContext";
import { ChangeEvent, FormEvent, useState } from "react";

const NovaIdeia: React.FC = () => {
    const [titulo, setTitulo] = useState("");
    const [destinatario, setDestinatario] = useState(""); // Novo campo para destinatário
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");

    const { redirectTo } = useApiContext();
    const { usuario } = useApiContext(); // Obtém o usuário do contexto

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        console.log(usuario);

        if (titulo === '' || destinatario === '') { // Verifique o destinatário
            alert('Insira ao menos as informações básicas!');
            redirectTo("/NovaIdeia");
            return;
        }

        if (img === 'sim') {
            alert('Imagem negada por violar os termos de uso de serviço!');
            redirectTo("/NovaIdeia");
            return;
        }

        // Criação da nova mensagem
        const novaMensagem = {
            titulo: titulo,
            texto: desc,
            curtidas: 0,
            dataHora: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
            destinatario: destinatario, // Adicionando destinatário
            usuario_id: usuario?.id_Usuario, // Adiciona o ID do usuário
        };

        console.log(JSON.stringify(novaMensagem));
        console.log(usuario);

        try {
            const response = await fetch("http://localhost:8080/ideia", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaMensagem),
            });

            if (response.ok) {
                alert('Ideia publicada com sucesso');
                redirectTo("/Perfil");
            } else {
                alert('Erro ao publicar a ideia');
                redirectTo("/NovaIdeia");
            }
        } catch (error) {
            console.error("Erro ao enviar a mensagem:", error);
            alert('Erro ao publicar a ideia');
            redirectTo("/NovaIdeia");
        }
    };

    function handleTitulo(event: ChangeEvent<HTMLInputElement>) {
        setTitulo(event.target.value);
    };

    function handleDestinatario(event: ChangeEvent<HTMLInputElement>) { // Função para o destinatário
        setDestinatario(event.target.value);
    };

    function handleImg(event: ChangeEvent<HTMLInputElement>) {
        setImg(event.target.value);
    };

    function handleDesc(event: ChangeEvent<HTMLInputElement>) {
        setDesc(event.target.value);
    };

    return (
        <div className={styles.telaDaNovaIdeia}>
            <form className={styles.areaDaNovaIdeia} onSubmit={handleSubmit}>
                <label className={styles.tituloDaNovaIdeia}>Título</label>
                <input className={styles.inputDoTituloDaNovaIdeia} type="text" onChange={handleTitulo} />

                <label className={styles.destinatarioDaNovaIdeia}>Destinatário</label>
                <input className={styles.inputDoDestinatarioDaNovaIdeia} type="text" onChange={handleDestinatario} />

                <label className={styles.descricaoDaNovaIdeia}>Descrição</label>
                <div className={styles.conteudoDaNovaIdeia}>
                    <input className={styles.inputDaDescricaoDaNovaIdeia} type="text" onChange={handleDesc} />
                    <div className={styles.inserirImagemDaNovaIdeia}>Arraste a imagem aqui...
                        <input className={styles.inputDaDescricaoDaNovaIdeia} type="text" onChange={handleImg} />
                    </div>
                </div>

                <div className={styles.areaDoPostarIdeia}>
                    <button className={styles.botaoDoPostarIdeia}>Postar Ideia</button>
                </div>
            </form>
        </div>
    );
}

export default NovaIdeia;