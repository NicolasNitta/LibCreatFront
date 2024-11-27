import { NewNote } from "../../components/Notas/NewNote";
import { Note } from "../../components/Notas/Note";

import NovaIdeia from "../../components/NovaIdeia"

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

    return (

      <>

        <Navegacao/>

        <NovaIdeia />

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