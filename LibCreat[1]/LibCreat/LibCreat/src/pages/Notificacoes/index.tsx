import { NoteForYou } from "../../components/Notas/NoteForyou";

import Navegacao from '../../components/Navegacao/index';

import styles from '../../style.module.css';

function ForYou() {


    return (

        <>

            <Navegacao/>

            <div className={styles.forYou}>

            <NoteForYou note={{
                    date: new Date(2024, 7, 27),
                    content: "Personagem do roblox salvando o mundo do Godzila"
                }}
                tags={["#roblox", "kaiju", "#godzila"]}/>

                <NoteForYou note={{
                    date: new Date(2024, 7, 21),
                    content: "Goku na festa de aniversário da Miku"
                }}
                tags={["#miku", "#goku"]}/>
                
                <NoteForYou note={{
                    date: new Date(2024, 6, 24),
                    content: "Criaturas do folclore brasileiro num piano bar"
                }}
                tags={["#brasil", "#folclore", "#jazz"]}/>

            </div>

        </>

    )
}

export default ForYou;