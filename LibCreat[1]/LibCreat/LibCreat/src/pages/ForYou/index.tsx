import { NoteForYou } from "../../components/Notas/NoteForyou";

import Navegacao from "../../components/Navegacao";

import styles from '../../style.module.css';

function ForYou() {

    return (

        <>

            <Navegacao/>

            <div className={styles.forYou}>

                <NoteForYou note={{
                    date: new Date(2024, 7, 27),
                    content: "Mago Caipira voando no trator mágico ao por do sol"
                }}
                tags={["#animal", "#furry", "#fantasia"]}/>

                <NoteForYou note={{
                    date: new Date(2024, 7, 21),
                    content: "Homem aranha tomando café em cima do prédio olhando para o céu em um dia chuvoso"
                }}
                tags={["#heroi", "#vibes"]}/>
                
                <NoteForYou note={{
                    date: new Date(2024, 6, 24),
                    content: "Cidade cyberpunk misturado com uma temática medieval, muita cor neon roxa e personagens espinhosos, lotados de espetos pelo corpo."
                }}
                tags={["#cyberpunk", "#medieval"]}/>

            </div>



            <script src="./script.js"></script>

        </>

    )
}

export default ForYou;