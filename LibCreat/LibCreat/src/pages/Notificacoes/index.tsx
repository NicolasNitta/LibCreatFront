import { NoteForYou } from "../../components/Notas/NoteForyou";

import Navegacao from '../../components/Navegacao/index';

import styles from '../../style.module.css';

function ForYou() {


    return (

        <>

            <Navegacao/>

            <div className={styles.forYou}>

            <NoteForYou note={{
                    userName: "TestUserAlt",
                    nick: "testuser02",
                    date: new Date(2024, 7, 27),
                    title: "Personagem do roblox salvando o mundo do Godzila",
                    content: "Sabe aquele builderman do roblox? Quero ele pulando em cima do Godzila.",
                }}/>

                <NoteForYou note={{
                    userName: "TestUserAlt",
                    nick: "testuser02",
                    date: new Date(2024, 7, 21),
                    title: "Aniversário do curupira",
                    content: "É isso.",
                }}/>
                
                <NoteForYou note={{
                    userName: "TestUserAlt",
                    nick: "testuser02",
                    date: new Date(2024, 6, 24),
                    title: "Goku e Miku num piano bar",
                    content: "O Goku comendo 30 coxinhas enquanto a Miku tá quase desmaiando de tanto encher a cara.",
                }}/>

            </div>

        </>

    )
}

export default ForYou;