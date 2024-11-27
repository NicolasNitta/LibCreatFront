import { NewNote } from "../../components/Notas/NewNote";
import { Note } from "../../components/Notas/Note";

import Navegacao from '../../components/Navegacao/index';

import Usuario from '../../components/Usuario/index';

import styles from "../../style.module.css";
import { useEffect, useState } from "react";

export function Perfil() {

  const [ideias, setIdeias] = useState([]);

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

    const [usuario, setUsuario] = useState(null); // Estado para armazenar as informações do usuário

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch("http://localhost:8080/usuario"); // URL da API para obter todos os usuários
                if (!response.ok) {
                    throw new Error("Erro ao buscar usuários");
                }
                const data = await response.json();
                
                // Verifica se a lista de usuários não está vazia e pega o último usuário
                if (data.length > 0) {
                    const ultimoUsuario = data[data.length - 1]; // Pega o último usuário da lista
                    setUsuario(ultimoUsuario); // Armazena os dados do último usuário no estado
                    console.log(usuario);
                }
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsuarios(); // Chama a função para buscar todos os usuários
    }, []); // O array vazio significa que o efeito será executado apenas uma vez, quando o componente for montado

    if (!usuario) {
        return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
    }

    return (

      <>

        <Navegacao/>

        <Usuario/>

        <div className={styles.areaDasPublicacoesDoPerfil}>

          <NewNote />

          {ideias.map((ideia: { 
                    usuario_id: string | number;
                    dataHora: Date, 
                    texto: string; 
                }) => (
                    <>
                        <Note
                        note={{
                          userName: usuario.nome,
                          nick: usuario.nickname,
                          date: ideia.dataHora,
                          title: ideia.titulo,
                          content: ideia.texto,
                        }}
                        />
                    </>
                ))}

        </div>  

      </>

    )
}

export default Perfil;