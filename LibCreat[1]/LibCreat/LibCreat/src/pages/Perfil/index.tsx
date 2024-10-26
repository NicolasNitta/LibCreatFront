import { NewNote } from "../../components/Notas/NewNote";
import { Note } from "../../components/Notas/Note";

import Navegacao from '../../components/Navegacao/index';

import Usuario from '../../components/Usuario/index';

import styles from "../../style.module.css";

export function Perfil() {

    return (

      <>

        <Navegacao/>

        <Usuario/>

        <div className={styles.areaDasPublicacoesDoPerfil}>

          <NewNote />

          <Note note={{
            date: new Date(2024, 7, 27),
            content: "Mago Caipira voando no trator mágico ao por do sol"
            }}
          tags={["#animal", "#furry", "#fantasia"]}/>

          <Note note={{
            date: new Date(2024, 7, 21),
            content: "Homem aranha tomando café em cima do prédio olhando para o céu em um dia chuvoso"
            }}
          tags={["#heroi", "#vibes"]}/>
                
          <Note note={{
            date: new Date(2024, 6, 24),
            content: "Cidade cyberpunk misturado com uma temática medieval, muita cor neon roxa e personagens espinhosos, lotados de espetos pelo corpo."
            }}
          tags={["#cyberpunk", "#medieval"]}/>

        </div>  

      </>

    )
}

export default Perfil;