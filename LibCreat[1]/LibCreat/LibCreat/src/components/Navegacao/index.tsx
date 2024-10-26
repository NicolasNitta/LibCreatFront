import styles from "../../style.module.css";

import { useApiContext } from "../../APIContext/PageContext";

const Navegacao: React.FC = () => {

    const { redirectTo } = useApiContext();

    return (

            <nav className={styles.abaDeNavegacao}>

                
                    <button onClick={() => {redirectTo("/ForYou")}} className={styles.botaoDaNavegacaoParaForYou}></button>
                    <button onClick={() => {redirectTo("/Notificacoes")}} className={styles.botaoDaNavegacaoParaNotificacoes}></button>
                    <button onClick={() => {redirectTo("/Perfil")}} className={styles.botaoDaNavegacaoParaPerfil}></button>
                    <button onClick={() => {redirectTo("/Login")}} className={styles.botaoDaNavegacaoParaLogin}></button> 
            

            </nav>

    )
}

export default Navegacao;