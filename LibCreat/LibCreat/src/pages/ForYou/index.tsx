import { NoteForYou } from "../../components/Notas/NoteForyou";
import Navegacao from "../../components/Navegacao";
import styles from '../../style.module.css';
import { useEffect, useState } from "react";

function ForYou() {
    const [ideias, setIdeias] = useState([]);
    const [usuarios, setUsuarios] = useState([]); // Estado para armazenar informações dos usuários
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

    useEffect(() => {
        const fetchIdeias = async () => {
            try {
                const response = await fetch('http://localhost:8080/ideia'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setIdeias(data);
                console.log(data);
            } catch (error) {
                console.error("Erro ao buscar ideias:", error);
            }
        };

        fetchIdeias();
    }, []);

    useEffect(() => {
        const fetchUsuarios = async () => {
            setLoading(true); // Inicia o carregamento
            for (const ideia of ideias) {
                try {
                    const response = await fetch(`http://localhost:8080/usuario/${ideia.usuario_id}`);
                    if (!response.ok) {
                        throw new Error(`Erro ao buscar usuário com ID ${ideia.usuario_id}: ${response.statusText}`);
                    }
                    const usuarioData = await response.json();
                    setUsuarios(prev => [...prev, usuarioData]); // Adiciona o usuário ao estado
                } catch (error) {
                    console.error("Erro ao buscar usuários:", error);
                }
            }
            setLoading(false); // Finaliza o carregamento após buscar todos os usuários
        };

        if (ideias.length > 0) {
            fetchUsuarios(); // Chama a função para buscar usuários quando as ideias são carregadas
        }
    }, [ideias]); // Dependência em 'ideias' para buscar usuários sempre que as ideias mudarem

    if (loading) {
        return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
    }

    return (
        <>
            <Navegacao />

            <div className={styles.forYou}>
                {ideias.map((ideia, index) => {
                    const usuario = usuarios[index]; // Obtém o usuário correspondente

                    return (
                        <NoteForYou
                            key={ideia.id} // Adicione uma chave única para cada NoteForYou
                            note={{
                                userName: usuario ? usuario.nome : "Desconhecido", // Nome do usuário ou "Desconhecido"
                                nick: usuario ? usuario.nickname : "Desconhecido", // Nick do usuário ou "Desconhecido"
                                date: new Date(ideia.dataHora), // Data da ideia
                                title: ideia.titulo, // Título da ideia
                                content: ideia.texto, // Conteúdo da ideia
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ForYou;